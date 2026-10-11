
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CRUD from "../../../api/crud";

const ViewTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const passedTest = location.state?.test || null;

  const [test, setTest] = useState(passedTest);
  const [loading, setLoading] = useState(!passedTest);
  const [error, setError] = useState("");

  useEffect(() => {
    if (passedTest) {
      setTest(passedTest);
      setLoading(false);
      return;
    }

    fetchTest();
  }, [id, passedTest]);

  const fetchTest = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await CRUD.getById(
        `/test/mocktest/${encodeURIComponent(id)}`
      );

      const result = response?.data?.data;

      if (!result) {
        setError("Mock test not found.");
        setTest(null);
        return;
      }

      setTest(result);
    } catch (err) {
      console.error("Failed to fetch mock test:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load mock test. Please try again."
      );
      setTest(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="mt-4 text-sm text-gray-500">
            Loading mock test...
          </p>
        </div>
      </div>
    );
  }

  if (error || !test) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Unable to Load Test
          </h2>

          <p className="mt-3 text-sm text-red-600">
            {error || "Mock test not found."}
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Go Back
            </button>

            <button
              type="button"
              onClick={fetchTest}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Published in the backend is displayed as Active to the user.
  const isActive = test.status === "Published";

  const sections = Array.isArray(test.sections) ? test.sections : [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back
          </button>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isActive
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Test Title and Description */}
          <div className="border-b border-gray-200 p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {test.title || "Untitled Mock Test"}
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              {test.description || "No description available."}
            </p>
          </div>

          {/* Test Information */}
          <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:p-8">
            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm text-blue-700">Duration</p>
              <p className="mt-2 text-xl font-bold text-blue-900">
                {test.attemptDuration != null
                  ? `${test.attemptDuration} minutes`
                  : "Not specified"}
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <p className="text-sm text-purple-700">Total Marks</p>
              <p className="mt-2 text-xl font-bold text-purple-900">
                {test.totalMarks ?? "Not specified"}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm text-green-700">Total Questions</p>
              <p className="mt-2 text-xl font-bold text-green-900">
                {test.totalQuestions ??
                  sections.reduce(
                    (total, section) =>
                      total +
                      (section.totalQuestions ??
                        section.questions?.length ??
                        0),
                    0
                  )}
              </p>
            </div>
          </div>

          {/* Test Instructions */}
          <div className="border-t border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-xl">
                📋
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Test Instructions
                </h2>
                <p className="text-sm text-gray-500">
                  Please read the instructions carefully before starting.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              {test.instructions ? (
                <div className="whitespace-pre-line text-sm leading-7 text-gray-700">
                  {test.instructions}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No special instructions provided for this test.
                </p>
              )}
            </div>
          </div>

          {/* Test Sections */}
          {sections.length > 0 && (
            <div className="border-t border-gray-200 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900">
                Test Sections
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Overview of the sections included in this test.
              </p>

              <div className="mt-5 space-y-4">
                {sections.map((section, index) => (
                  <div
                    key={section._id || section.sectionId || index}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <h3 className="font-semibold text-gray-900">
                        {section.title || `Section ${index + 1}`}
                      </h3>

                      {section.isOptional && (
                        <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                          Optional
                        </span>
                      )}
                    </div>

                    {section.description && (
                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {section.description}
                      </p>
                    )}

                    {section.instructions && (
                      <div className="mt-3 rounded-lg bg-gray-50 p-3">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Section Instructions
                        </p>
                        <p className="whitespace-pre-line text-sm leading-6 text-gray-700">
                          {section.instructions}
                        </p>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                        Questions:{" "}
                        {section.totalQuestions ??
                          section.questions?.length ??
                          0}
                      </span>

                      <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                        Marks: {section.totalMarks ?? "Not specified"}
                      </span>

                      {section.duration != null && (
                        <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                          Duration: {section.duration} min
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Start Test */}
          <div className="border-t border-gray-200 bg-gray-50 p-6 sm:p-8">
            {isActive ? (
              <div>
                <p className="mb-4 text-sm text-gray-600">
                  Make sure you have read all the instructions before
                  starting the test.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/test/mock-test/${encodeURIComponent(
                        test.slug || test.id
                      )}/attempt`,
                      { state: { test } }
                    )
                  }
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                >
                  Start Test →
                </button>
              </div>
            ) : (
              <p className="text-sm font-medium text-red-600">
                This test is currently unavailable.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTest;
