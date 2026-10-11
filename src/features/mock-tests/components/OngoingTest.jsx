import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OngoingTest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationTest = location.state?.test || null;

  const [test] = useState(navigationTest);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [hasValidDuration, setHasValidDuration] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(
    Boolean(document.fullscreenElement)
  );
  const [fullscreenError, setFullscreenError] = useState("");

  const enterFullscreen = useCallback(async () => {
    try {
      setFullscreenError("");

      if (document.fullscreenElement) {
        setIsFullscreen(true);
        return;
      }

      if (!document.documentElement.requestFullscreen) {
        setFullscreenError("Fullscreen is not supported by this browser.");
        return;
      }

      await document.documentElement.requestFullscreen();
    } catch (error) {
      console.error("Unable to enter fullscreen:", error);
      setFullscreenError(
        "The browser blocked fullscreen. Click Enter Fullscreen to try again."
      );
    }
  }, []);

  // Load questions from navigation state; no API fetch.
  useEffect(() => {
    console.log("Navigation test data:", navigationTest);

    if (!navigationTest) {
      setLoadError("Test data not available. Please select a test first.");
      setLoading(false);
      return;
    }

    if (!Array.isArray(navigationTest.sections)) {
      setLoadError("Test sections are not available.");
      setLoading(false);
      return;
    }

    const loadedQuestions = navigationTest.sections.flatMap(
      (section, sectionIndex) => {
        if (!Array.isArray(section.questions)) {
          return [];
        }

        return section.questions
          .filter(
            (question) =>
              question !== null &&
              typeof question === "object" &&
              !Array.isArray(question)
          )
          .map((question) => ({
            ...question,
            sectionTitle: section.title || `Section ${sectionIndex + 1}`,
            sectionIndex,
            sectionMarksPerQuestion:
              section.marksPerQuestion ??
              navigationTest.marksPerQuestion ??
              1,
            sectionNegativeMarking:
              section.negativeMarking ??
              navigationTest.negativeMarking ??
              false,
            sectionNegativeMarksPerQuestion:
              section.negativeMarksPerQuestion ??
              navigationTest.negativeMarksPerQuestion ??
              0,
          }));
      }
    );

    console.log("Loaded questions:", loadedQuestions);

    setQuestions(loadedQuestions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setVisited(loadedQuestions.length > 0 ? { 0: true } : {});
    setMarkedForReview({});
    setSubmitted(false);
    setAutoSubmitted(false);
    setShowSubmitModal(false);

    const duration = Number(navigationTest.attemptDuration);
    const validDuration = Number.isFinite(duration) && duration > 0;

    setHasValidDuration(validDuration);
    setTimeLeft(validDuration ? Math.floor(duration * 60) : 0);

    if (loadedQuestions.length === 0) {
      setLoadError(
        "No populated questions found. Each section must contain question objects, not only question IDs."
      );
    } else {
      setLoadError("");
    }

    setLoading(false);
  }, [navigationTest]);

  // Track fullscreen state.
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));

      if (document.fullscreenElement) {
        setFullscreenError("");
      }
    };

    const handleFullscreenError = () => {
      setFullscreenError(
        "Fullscreen could not be enabled. Click Enter Fullscreen."
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("fullscreenerror", handleFullscreenError);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener("fullscreenerror", handleFullscreenError);
    };
  }, []);

  // Request fullscreen on mount. The browser may require a user click.
  useEffect(() => {
    enterFullscreen();
  }, [enterFullscreen]);

  // Mark the displayed question as visited.
  useEffect(() => {
    if (questions.length > 0 && !submitted) {
      setVisited((previous) => {
        if (previous[currentQuestionIndex]) {
          return previous;
        }

        return { ...previous, [currentQuestionIndex]: true };
      });
    }
  }, [currentQuestionIndex, questions.length, submitted]);

  // Countdown timer.
  useEffect(() => {
    if (
      loading ||
      !test ||
      !hasValidDuration ||
      submitted ||
      timeLeft <= 0
    ) {
      return undefined;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, test, hasValidDuration, submitted, timeLeft > 0]);

  // Auto-submit when the timer reaches zero.
  useEffect(() => {
    if (
      !loading &&
      test &&
      hasValidDuration &&
      questions.length > 0 &&
      timeLeft === 0 &&
      !submitted
    ) {
      setAutoSubmitted(true);
      setSubmitted(true);
      setShowSubmitModal(false);
    }
  }, [
    loading,
    test,
    hasValidDuration,
    questions.length,
    timeLeft,
    submitted,
  ]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [hours, minutes, remainingSeconds]
      .map((value) => String(value).padStart(2, "0"))
      .join(":");
  };

  const getQuestionId = (question, index) =>
    String(question?.questionId ?? question?._id ?? question?.id ?? index);

  const goToQuestion = (index) => {
    if (index < 0 || index >= questions.length || submitted) {
      return;
    }

    setCurrentQuestionIndex(index);
  };

  // Jump directly to the first question in a section.
  const goToSection = (sectionIndex) => {
    if (submitted) return;

    const firstQuestionIndex = questions.findIndex(
      (question) => question.sectionIndex === sectionIndex
    );

    if (firstQuestionIndex !== -1) {
      goToQuestion(firstQuestionIndex);
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    if (submitted) return;

    setAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReview = () => {
    if (submitted) return;

    setMarkedForReview((previous) => ({
      ...previous,
      [currentQuestionIndex]: !previous[currentQuestionIndex],
    }));

    if (currentQuestionIndex < questions.length - 1) {
      goToQuestion(currentQuestionIndex + 1);
    }
  };

  const handleClearResponse = () => {
    if (submitted) return;

    const questionId = getQuestionId(
      questions[currentQuestionIndex],
      currentQuestionIndex
    );

    setAnswers((previous) => {
      const updated = { ...previous };
      delete updated[questionId];
      return updated;
    });
  };

  const handleSubmitTest = () => {
    if (!submitted) {
      setShowSubmitModal(true);
    }
  };

  const confirmSubmit = () => {
    setAutoSubmitted(false);
    setShowSubmitModal(false);
    setSubmitted(true);
  };

  const totalQuestions = questions.length;

  const attemptedCount = questions.reduce((count, question, index) => {
    const questionId = getQuestionId(question, index);

    return (
      count +
      (Object.prototype.hasOwnProperty.call(answers, questionId) ? 1 : 0)
    );
  }, 0);

  const markedCount = Object.values(markedForReview).filter(Boolean).length;
  const notAnsweredCount = totalQuestions - attemptedCount;

  const notVisitedCount = questions.reduce(
    (count, question, index) => count + (visited[index] ? 0 : 1),
    0
  );

  const getQuestionStatus = (index) => {
    const questionId = getQuestionId(questions[index], index);
    const answered = Object.prototype.hasOwnProperty.call(
      answers,
      questionId
    );
    const marked = Boolean(markedForReview[index]);
    const wasVisited = Boolean(visited[index]);

    if (answered && marked) return "answered-marked";
    if (marked) return "marked";
    if (answered) return "answered";
    if (wasVisited) return "visited";

    return "not-visited";
  };

  const statusStyles = {
    current: "bg-blue-600 text-white border-blue-600",
    answered: "bg-green-600 text-white border-green-600",
    "answered-marked": "bg-purple-600 text-white border-purple-600",
    marked: "bg-purple-100 text-purple-800 border-purple-300",
    visited: "bg-red-100 text-red-700 border-red-300",
    "not-visited": "bg-gray-100 text-gray-700 border-gray-300",
  };

  const sections = [
    ...new Map(
      questions.map((question) => [
        question.sectionIndex,
        {
          index: question.sectionIndex,
          title: question.sectionTitle,
        },
      ])
    ).values(),
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="mt-4 font-medium text-slate-600">
            Preparing your examination...
          </p>
          <button
            type="button"
            onClick={enterFullscreen}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Enter Fullscreen
          </button>
          {fullscreenError && (
            <p className="mt-3 text-sm text-amber-700">{fullscreenError}</p>
          )}
        </div>
      </div>
    );
  }

  if (loadError && questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-lg rounded-xl border bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            {test ? "Questions Unavailable" : "Test Data Unavailable"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{loadError}</p>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!test || questions.length === 0) {
    return null;
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Thank You!
          </h1>
          <p className="mt-2 text-lg font-semibold text-green-700">
            Examination Submitted Successfully
          </p>
          <p className="mt-4 leading-6 text-slate-600">
            {autoSubmitted
              ? "The examination time has ended and your test was submitted automatically."
              : "Thank you for completing the examination."}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 text-left">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total Questions</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {totalQuestions}
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm text-green-700">Attempted</p>
              <p className="mt-1 text-2xl font-bold text-green-800">
                {attemptedCount}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-7 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionId = getQuestionId(currentQuestion, currentQuestionIndex);

  const questionLanguage =
    currentQuestion.questionLang?.eng ??
    currentQuestion.questionLang?.en ??
    null;

  const options = Array.isArray(questionLanguage?.options)
    ? questionLanguage.options
    : Array.isArray(currentQuestion.options)
      ? currentQuestion.options
      : [];

  const questionText =
    questionLanguage?.question ||
    currentQuestion.questionText ||
    currentQuestion.question ||
    currentQuestion.title ||
    "Question text unavailable";

  const marks = currentQuestion.sectionMarksPerQuestion;
  const negativeMarking = currentQuestion.sectionNegativeMarking;
  const negativeMarks = currentQuestion.sectionNegativeMarksPerQuestion;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Online Examination
            </p>
            <h1 className="mt-1 truncate text-lg font-bold text-slate-900 sm:text-xl">
              {test.title || "Mock Test"}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {!isFullscreen && (
              <button
                type="button"
                onClick={enterFullscreen}
                className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
              >
                Enter Fullscreen
              </button>
            )}

            <div
              className={`rounded-lg border px-3 py-2 text-center ${
                hasValidDuration && timeLeft <= 300
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-slate-200 bg-slate-50 text-slate-800"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider">
                Time Remaining
              </p>
              <p className="font-mono text-xl font-bold sm:text-2xl">
                {hasValidDuration ? formatTime(timeLeft) : "--:--:--"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmitTest}
              className="rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              Submit Test
            </button>
          </div>
        </div>

        {fullscreenError && (
          <div className="border-t border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-800">
            {fullscreenError}
          </div>
        )}
      </header>

      {/* Exam summary */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm sm:px-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-600">
            <span>
              <strong className="text-slate-900">Questions:</strong>{" "}
              {totalQuestions}
            </span>
            <span>
              <strong className="text-slate-900">Attempted:</strong>{" "}
              {attemptedCount}
            </span>
            <span>
              <strong className="text-slate-900">Remaining:</strong>{" "}
              {notAnsweredCount}
            </span>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {test.language || "Examination"}
          </span>
        </div>
      </div>

      {/* Exam content */}
      <main className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Section name displayed above the question */}
          <div className="border-b border-blue-200 bg-blue-50 px-5 py-1 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                
                <h2 className="mt-1 text-xs  text-blue-900 sm:text-xl">
                  {currentQuestion.sectionTitle}
                </h2>
              </div>

              <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800">
                Section{" "}
                {sections.findIndex(
                  (section) =>
                    section.index === currentQuestion.sectionIndex
                ) + 1}{" "}
                of {sections.length}
              </span>
            </div>
          </div>

          {/* Question heading */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Question
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Question {currentQuestionIndex + 1}
                <span className="font-medium text-slate-500">
                  {" "}of {totalQuestions}
                </span>
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-md bg-green-50 px-3 py-2 text-green-700">
                +{marks} Marks
              </span>
              <span
                className={`rounded-md px-3 py-2 ${
                  negativeMarking
                    ? "bg-red-50 text-red-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {negativeMarking
                  ? `−${negativeMarks} Negative`
                  : "No Negative Marking"}
              </span>
            </div>
          </div>

          {/* Question and options */}
          <div className="min-h-[350px] p-5 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-100 text-sm font-bold text-blue-700">
                {currentQuestionIndex + 1}
              </span>
              <p className="whitespace-pre-wrap pt-1 text-base font-medium leading-8 text-slate-900 sm:text-lg">
                {questionText}
              </p>
            </div>

            {currentQuestion.questionImage && (
              <img
                src={currentQuestion.questionImage}
                alt="Question"
                className="mb-6 max-h-80 max-w-full rounded-lg border border-slate-200 object-contain"
              />
            )}

            <div className="space-y-3">
              {options.map((option, index) => {
                const optionValue =
                  option && typeof option === "object"
                    ? option.value ??
                      option.text ??
                      option.label ??
                      option.optionId ??
                      option._id ??
                      index
                    : option;

                const optionLabel =
                  option && typeof option === "object"
                    ? option.text ??
                      option.label ??
                      option.value ??
                      option.option ??
                      option.optionText ??
                      ""
                    : option;

                const selected = answers[questionId] === optionValue;

                return (
                  <label
                    key={
                      option && typeof option === "object"
                        ? option._id ?? option.optionId ?? index
                        : index
                    }
                    className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition ${
                      selected
                        ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${questionId}`}
                      value={String(optionValue ?? "")}
                      checked={selected}
                      onChange={() =>
                        handleAnswerChange(questionId, optionValue)
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                    />

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-sm font-bold ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="pt-1 text-sm leading-6 text-slate-700 sm:text-base">
                      {String(optionLabel ?? "")}
                    </span>
                  </label>
                );
              })}
            </div>

            {options.length === 0 && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                No options are available for this question.
              </div>
            )}
          </div>

          {/* Question controls */}
          <div className="border-t border-slate-200 bg-slate-50 p-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleMarkForReview}
                className="rounded-lg border border-purple-300 bg-white px-4 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50"
              >
                {markedForReview[currentQuestionIndex]
                  ? "Unmark Review & Next"
                  : "Mark for Review & Next"}
              </button>

              <button
                type="button"
                onClick={handleClearResponse}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Clear Response
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={() => goToQuestion(currentQuestionIndex - 1)}
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Previous
              </button>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={handleSaveAndNext}
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
                >
                  Save & Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitTest}
                  className="rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-green-700"
                >
                  Finish & Submit
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Section and question navigation */}
        <aside className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-36">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-bold text-slate-900">Exam Navigation</h2>
            <p className="mt-1 text-xs text-slate-500">
              Jump directly to a section or question.
            </p>
          </div>

          {/* Section palette */}
         

          {/* Answer summary */}
          <div className="grid grid-cols-2 gap-3 border-b border-slate-200 bg-slate-50 p-4">
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs text-slate-500">Answered</p>
              <p className="mt-1 text-xl font-bold text-green-700">
                {attemptedCount}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs text-slate-500">Not Answered</p>
              <p className="mt-1 text-xl font-bold text-red-600">
                {notAnsweredCount}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs text-slate-500">Marked for Review</p>
              <p className="mt-1 text-xl font-bold text-purple-700">
                {markedCount}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs text-slate-500">Not Visited</p>
              <p className="mt-1 text-xl font-bold text-slate-700">
                {notVisitedCount}
              </p>
            </div>
          </div>

          {/* Question palette */}
          <div className="p-5">
            <h3 className="mb-3 text-sm font-bold text-slate-900">
              Questions — {currentQuestion.sectionTitle}
            </h3>

            <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-5">
              {questions.map((question, index) => {
                const status = getQuestionStatus(index);
                const isCurrent = index === currentQuestionIndex;

                return (
                  <button
                    key={`${question.sectionIndex}-${getQuestionId(question, index)}`}
                    type="button"
                    title={`Question ${index + 1}: ${status}`}
                    onClick={() => goToQuestion(index)}
                    className={`relative flex h-10 items-center justify-center rounded-lg border text-sm font-bold transition hover:brightness-95 ${
                      isCurrent
                        ? statusStyles.current
                        : statusStyles[status]
                    }`}
                  >
                    {index + 1}
                    {markedForReview[index] && (
                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-purple-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold text-slate-800">Legend</h3>

              {[
                ["bg-blue-600", "Current Question"],
                ["bg-green-600", "Answered"],
                ["bg-red-400", "Not Answered (Visited)"],
                ["bg-purple-200", "Marked for Review"],
                ["bg-purple-600", "Answered & Marked"],
                ["bg-gray-200", "Not Visited"],
              ].map(([color, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`h-4 w-4 shrink-0 rounded ${color}`} />
                  <span className="text-xs text-slate-600">{label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleSubmitTest}
              className="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              Submit Examination
            </button>
          </div>
        </aside>
      </main>

      {/* Submit confirmation modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-modal-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-700">
              !
            </div>

            <h2
              id="submit-modal-title"
              className="mt-4 text-xl font-bold text-slate-900"
            >
              Submit Examination?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Are you sure you want to submit? You cannot change your answers
              after submission.
            </p>

            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <div className="flex justify-between py-1 text-sm">
                <span className="text-slate-600">Total questions</span>
                <strong>{totalQuestions}</strong>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-slate-600">Answered</span>
                <strong className="text-green-700">{attemptedCount}</strong>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-slate-600">Not answered</span>
                <strong className="text-red-600">{notAnsweredCount}</strong>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-slate-600">Marked for review</span>
                <strong className="text-purple-700">{markedCount}</strong>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={confirmSubmit}
                className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OngoingTest;