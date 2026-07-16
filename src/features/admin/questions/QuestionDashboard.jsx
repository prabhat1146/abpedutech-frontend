import React from "react";
import { useNavigate } from "react-router-dom";

import QuestionStatCard from "./components/QuestionStatCard";
import QuestionQuickActions from "./components/QuestionQuickActions";
import RecentQuestions from "./components/RecentQuestions";

const QuestionDashboard = () => {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mx-auto max-w-7xl">

                {/* Header */}

                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>

                        <h1 className="text-3xl font-bold text-slate-800">
                            Question Dashboard
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Manage your complete question bank from one place.
                        </p>

                    </div>

                    <button
                        onClick={() => navigate("/user/admin/questions/create-question")}
                        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                    >
                        + Create Question
                    </button>

                </div>

                {/* Statistics */}

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    <QuestionStatCard title="Total Questions" value="8,520" icon="📝" />
                    <QuestionStatCard title="Published" value="7,980" icon="✅" />
                    <QuestionStatCard title="Draft" value="540" icon="📄" />
                    <QuestionStatCard title="PYQ Questions" value="2,430" icon="🎯" />
                    <QuestionStatCard title="Mock Questions" value="6,090" icon="📋" />
                    <QuestionStatCard title="Subjects" value="18" icon="📚" />
                    <QuestionStatCard title="Chapters" value="145" icon="📖" />
                    <QuestionStatCard title="Topics" value="780" icon="📌" />

                </div>

                {/* Analytics */}

                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    <div className="rounded-2xl bg-white p-6 shadow">

                        <h2 className="mb-6 text-xl font-bold">
                            Difficulty Distribution
                        </h2>

                        <div className="space-y-5">

                            <Progress
                                label="Easy"
                                value={3200}
                                total={8520}
                                color="bg-green-500"
                            />

                            <Progress
                                label="Medium"
                                value={4100}
                                total={8520}
                                color="bg-yellow-500"
                            />

                            <Progress
                                label="Hard"
                                value={1220}
                                total={8520}
                                color="bg-red-500"
                            />

                        </div>

                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow">

                        <h2 className="mb-6 text-xl font-bold">
                            Subject Wise Questions
                        </h2>

                        <div className="space-y-5">

                            <Progress label="Computer Science" value={2350} total={8520} color="bg-indigo-500" />
                            <Progress label="Mathematics" value={1820} total={8520} color="bg-blue-500" />
                            <Progress label="Reasoning" value={1350} total={8520} color="bg-purple-500" />
                            <Progress label="English" value={920} total={8520} color="bg-pink-500" />
                            <Progress label="GK" value={680} total={8520} color="bg-cyan-500" />

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                    <div className="lg:col-span-2">

                        <RecentQuestions />

                    </div>

                    <QuestionQuickActions />

                </div>

            </div>

        </div>

    );

};

const Progress = ({ label, value, total, color }) => {

    const percent = (value / total) * 100;

    return (

        <div>

            <div className="mb-2 flex justify-between text-sm">

                <span className="font-medium text-slate-700">
                    {label}
                </span>

                <span className="font-semibold text-slate-700">
                    {value}
                </span>

            </div>

            <div className="h-3 w-full rounded-full bg-slate-200">

                <div
                    className={`h-3 rounded-full ${color}`}
                    style={{ width: `${percent}%` }}
                />

            </div>

        </div>

    );

};

export default QuestionDashboard;