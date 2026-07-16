import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionQuickActions = () => {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Create Question",
            description: "Add a new question manually.",
            icon: "➕",
            color: "bg-indigo-100 text-indigo-600",
            path: "/admin/questions/create"
        },

        {
            title: "Question Bank",
            description: "View and manage all questions.",
            icon: "📝",
            color: "bg-blue-100 text-blue-600",
            path: "/admin/questions"
        },

        {
            title: "Bulk Upload",
            description: "Import questions using Excel/CSV.",
            icon: "📤",
            color: "bg-green-100 text-green-600",
            path: "/admin/questions/bulk-upload"
        },

        {
            title: "Import PYQ",
            description: "Import Previous Year Questions.",
            icon: "🎯",
            color: "bg-orange-100 text-orange-600",
            path: "/admin/questions/import-pyq"
        },

        {
            title: "Review Drafts",
            description: "Review unpublished questions.",
            icon: "📄",
            color: "bg-yellow-100 text-yellow-700",
            path: "/admin/questions?status=draft"
        },

        {
            title: "Question Analytics",
            description: "View reports and statistics.",
            icon: "📊",
            color: "bg-purple-100 text-purple-600",
            path: "/admin/questions/analytics"
        }

    ];

    return (

        <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold text-slate-800">
                Quick Actions
            </h2>

            <div className="space-y-4">

                {actions.map((action) => (

                    <button
                        key={action.title}
                        onClick={() => navigate(action.path)}
                        className="
                            flex
                            w-full
                            items-center
                            gap-4
                            rounded-xl
                            border
                            border-slate-200
                            p-4
                            text-left
                            transition
                            hover:border-indigo-300
                            hover:bg-slate-50
                            hover:shadow-sm
                        "
                    >

                        <div
                            className={`
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                text-xl
                                ${action.color}
                            `}
                        >
                            {action.icon}
                        </div>

                        <div className="flex-1">

                            <h3 className="font-semibold text-slate-800">
                                {action.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                {action.description}
                            </p>

                        </div>

                        <span className="text-slate-400 text-lg">
                            →
                        </span>

                    </button>

                ))}

            </div>

        </div>

    );

};

export default QuestionQuickActions;