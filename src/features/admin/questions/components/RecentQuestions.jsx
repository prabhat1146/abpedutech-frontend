import React from "react";
import { useNavigate } from "react-router-dom";

const RecentQuestions = () => {

    const navigate = useNavigate();

    const questions = [

        {
            id: "QST-CS-001",
            question: "Which of the following is a necessary condition for Deadlock?",
            subject: "Computer Science",
            difficulty: "Medium",
            status: "Published"
        },

        {
            id: "QST-CS-002",
            question: "Which scheduling algorithm gives minimum average waiting time?",
            subject: "Operating System",
            difficulty: "Easy",
            status: "Draft"
        },

        {
            id: "QST-CS-003",
            question: "Which normal form removes transitive dependency?",
            subject: "DBMS",
            difficulty: "Medium",
            status: "Published"
        },

        {
            id: "QST-CS-004",
            question: "What is the worst-case complexity of Merge Sort?",
            subject: "Data Structures",
            difficulty: "Hard",
            status: "Published"
        },

        {
            id: "QST-CS-005",
            question: "Which protocol is used to transfer web pages?",
            subject: "Computer Networks",
            difficulty: "Easy",
            status: "Draft"
        }

    ];

    const difficultyColor = (difficulty) => {

        switch (difficulty.toLowerCase()) {

            case "easy":
                return "bg-green-100 text-green-700";

            case "medium":
                return "bg-yellow-100 text-yellow-700";

            case "hard":
                return "bg-red-100 text-red-700";

            default:
                return "bg-slate-100 text-slate-700";

        }

    };

    const statusColor = (status) => {

        switch (status.toLowerCase()) {

            case "published":
                return "bg-green-100 text-green-700";

            case "draft":
                return "bg-orange-100 text-orange-700";

            default:
                return "bg-slate-100 text-slate-700";

        }

    };

    return (

        <div className="rounded-2xl bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b p-6">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">
                        Recent Questions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Recently added or updated questions
                    </p>

                </div>

                <button
                    onClick={() => navigate("/admin/questions")}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                    View All
                </button>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Question
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Subject
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Difficulty
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {questions.map((question) => (

                            <tr
                                key={question.id}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-6 py-4">

                                    <p className="font-semibold text-slate-800">
                                        {question.id}
                                    </p>

                                    <p className="mt-1 max-w-md truncate text-sm text-slate-500">
                                        {question.question}
                                    </p>

                                </td>

                                <td className="px-6 py-4">
                                    {question.subject}
                                </td>

                                <td className="px-6 py-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor(question.difficulty)}`}
                                    >
                                        {question.difficulty}
                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(question.status)}`}
                                    >
                                        {question.status}
                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-2">

                                        <button
                                            onClick={() => navigate(`/admin/questions/${question.id}`)}
                                            className="rounded-lg bg-slate-100 px-3 py-2 text-sm hover:bg-slate-200"
                                        >
                                            View
                                        </button>

                                        <button
                                            onClick={() => navigate(`/admin/questions/${question.id}/edit`)}
                                            className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                                        >
                                            Edit
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default RecentQuestions;