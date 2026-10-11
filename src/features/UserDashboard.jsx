
import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const stats = [
    {
      title: "Questions Attempted",
      value: 0,
      icon: "📝",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Correct Answers",
      value: 0,
      icon: "✅",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Accuracy",
      value: "0%",
      icon: "🎯",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Study Streak",
      value: "0 Days",
      icon: "🔥",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const subjects = [
    {
      name: "Computer Fundamentals",
      description: "Learn computer basics and concepts",
      icon: "💻",
      questions: "Practice questions",
    },
    {
      name: "Mathematics",
      description: "Practice calculations and problem-solving",
      icon: "📐",
      questions: "Practice questions",
    },
    {
      name: "General Knowledge",
      description: "Improve your general awareness",
      icon: "🌍",
      questions: "Practice questions",
    },
    {
      name: "Reasoning",
      description: "Improve your logical thinking",
      icon: "🧠",
      questions: "Practice questions",
    },
  ];

  const quickActions = [
    {
      title: "Practice Questions",
      description: "Test your knowledge",
      icon: "✍️",
      link: "/practice",
    },
    {
      title: "Mock Tests",
      description: "Prepare for your exams",
      icon: "📋",
      link: "/test/mock-test",
    },
    {
      title: "My Results",
      description: "Review your performance",
      icon: "📊",
      link: "/results",
    },
    {
      title: "Bookmarks",
      description: "Revisit saved questions",
      icon: "🔖",
      link: "/bookmarks",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Welcome Section */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg sm:p-8">
          <p className="text-sm font-medium text-blue-100">
            USER DASHBOARD
          </p>

          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
            Welcome back! 👋
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">
            Keep learning, practice regularly, and track your progress
            toward your goals.
          </p>

          <Link
            to="/practice"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Start Practicing <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Statistics */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Your Progress
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{stat.title}</p>

                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${stat.color}`}
                  >
                    {stat.icon}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-bold text-gray-800">
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.link}
                className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-3xl">{action.icon}</span>

                <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {action.description}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-blue-600">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Explore Subjects
            </h2>

            <Link
              to="/subjects"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {subject.icon}
                </div>

                <h3 className="mt-4 font-semibold text-gray-800">
                  {subject.name}
                </h3>

                <p className="mt-2 min-h-10 text-sm text-gray-500">
                  {subject.description}
                </p>

                <Link
                  to="/practice"
                  className="mt-4 inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                  {subject.questions} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Recent Activity
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Your recent learning activity will appear here.
              </p>
            </div>

            <span className="text-3xl">📚</span>
          </div>

          <div className="mt-6 rounded-lg border border-dashed border-gray-200 py-10 text-center">
            <div className="text-4xl">📖</div>

            <p className="mt-3 font-medium text-gray-700">
              No activity yet
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Start practicing to see your learning history here.
            </p>

            <Link
              to="/practice"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Start Learning
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
