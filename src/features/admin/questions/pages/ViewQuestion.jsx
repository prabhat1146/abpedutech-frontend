import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewQuestion = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [question, setQuestion] = useState(null);

    useEffect(() => {

        loadQuestion();

    }, []);

    const loadQuestion = async () => {

        try {

            // const res = await API.questions.getById(id);
            // setQuestion(res.data.data);

            setQuestion({

                questionId: "QST-CS-001",

                subject: "Computer Science",

                chapter: "Operating System",

                topic: "Deadlock",

                type: "mcq",

                difficulty: "medium",

                marks: 2,

                negativeMarks: 0.5,

                status: "published",

                source: "PYQ",

                createdBy: "Admin",

                createdAt: "25 June 2026",

                tags: ["OS", "Deadlock"],

                question: {

                    eng: {

                        question: "Which of the following is a necessary condition for deadlock?",

                        options: [

                            {
                                optionId: "A",
                                text: "Mutual Exclusion"
                            },

                            {
                                optionId: "B",
                                text: "Paging"
                            },

                            {
                                optionId: "C",
                                text: "Scheduling"
                            },

                            {
                                optionId: "D",
                                text: "Fragmentation"
                            }

                        ]

                    },

                    hindi: {

                        question: "डेडलॉक के लिए निम्न में से कौन-सी आवश्यक शर्त है?",

                        options: [

                            {
                                optionId: "A",
                                text: "परस्पर बहिष्करण"
                            },

                            {
                                optionId: "B",
                                text: "पेजिंग"
                            },

                            {
                                optionId: "C",
                                text: "शेड्यूलिंग"
                            },

                            {
                                optionId: "D",
                                text: "फ्रेगमेंटेशन"
                            }

                        ]

                    }

                },

                correctAnswer: "A",

                explanation: {

                    eng: "Mutual exclusion is one of the four Coffman conditions.",

                    hindi: "परस्पर बहिष्करण कॉफमैन की चार आवश्यक शर्तों में से एक है।"

                }

            });

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center">

                Loading...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mx-auto max-w-5xl">

                {/* Header */}

                <div className="mb-6 flex items-center justify-between">

                    <div>

                        <h1 className="text-3xl font-bold">
                            View Question
                        </h1>

                        <p className="text-slate-500">
                            {question.questionId}
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-xl border px-5 py-2"
                        >
                            Back
                        </button>

                        <button
                            onClick={() => navigate(`/admin/questions/${id}/edit`)}
                            className="rounded-xl bg-indigo-600 px-5 py-2 text-white"
                        >
                            Edit
                        </button>

                    </div>

                </div>

                {/* Metadata */}

                <div className="mb-6 grid gap-4 rounded-2xl bg-white p-6 shadow md:grid-cols-3">

                    <Info label="Subject" value={question.subject} />
                    <Info label="Chapter" value={question.chapter} />
                    <Info label="Topic" value={question.topic} />
                    <Info label="Difficulty" value={question.difficulty} />
                    <Info label="Marks" value={question.marks} />
                    <Info label="Negative Marks" value={question.negativeMarks} />
                    <Info label="Type" value={question.type} />
                    <Info label="Status" value={question.status} />
                    <Info label="Source" value={question.source} />

                </div>

                {/* English */}

                <Section title="English Question">

                    <p className="mb-5 text-lg font-medium">
                        {question.question.eng.question}
                    </p>

                    <div className="space-y-3">

                        {question.question.eng.options.map((option) => (

                            <div
                                key={option.optionId}
                                className={`rounded-xl border p-4 ${
                                    option.optionId === question.correctAnswer
                                        ? "border-green-500 bg-green-50"
                                        : ""
                                }`}
                            >
                                <strong>{option.optionId}.</strong> {option.text}
                            </div>

                        ))}

                    </div>

                </Section>

                {/* Hindi */}

                <Section title="Hindi Question">

                    <p className="mb-5 text-lg font-medium">
                        {question.question.hindi.question}
                    </p>

                    <div className="space-y-3">

                        {question.question.hindi.options.map((option) => (

                            <div
                                key={option.optionId}
                                className={`rounded-xl border p-4 ${
                                    option.optionId === question.correctAnswer
                                        ? "border-green-500 bg-green-50"
                                        : ""
                                }`}
                            >
                                <strong>{option.optionId}.</strong> {option.text}
                            </div>

                        ))}

                    </div>

                </Section>

                {/* Explanation */}

                <Section title="Explanation">

                    <h3 className="font-semibold">English</h3>

                    <p className="mb-6 mt-2">
                        {question.explanation.eng}
                    </p>

                    <h3 className="font-semibold">Hindi</h3>

                    <p className="mt-2">
                        {question.explanation.hindi}
                    </p>

                </Section>

                {/* Footer */}

                <div className="mt-6 rounded-2xl bg-white p-6 shadow">

                    <div className="flex flex-wrap gap-3">

                        {question.tags.map((tag) => (

                            <span
                                key={tag}
                                className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700"
                            >
                                {tag}
                            </span>

                        ))}

                    </div>

                    <div className="mt-6 text-sm text-slate-500">

                        Created By: {question.createdBy}

                        <br />

                        Created At: {question.createdAt}

                    </div>

                </div>

            </div>

        </div>

    );

};

const Section = ({ title, children }) => (

    <div className="mb-6 rounded-2xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-bold">
            {title}
        </h2>

        {children}

    </div>

);

const Info = ({ label, value }) => (

    <div>

        <p className="text-sm text-slate-500">
            {label}
        </p>

        <p className="mt-1 font-semibold">
            {value}
        </p>

    </div>

);

export default ViewQuestion;