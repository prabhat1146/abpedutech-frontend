import React, { useEffect, useState } from "react";
import CRUD from "../../api/crud";
import { useNavigate } from "react-router-dom";


const MockTestDashboard = () => {
  const [mockTests, setMockTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  useEffect(() => {
    fetchMockTests();
  }, []);

  const fetchMockTests = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await CRUD.getAll("/test/mocktest/user-mock-test");

      const result = response?.data?.data ?? [];

      setMockTests(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error("Failed to fetch mock tests:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load mock tests. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: "Available Tests",
      value: mockTests.length,
      icon: "📝",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Tests Attempted",
      value: 0,
      icon: "✓",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Tests Completed",
      value: 0,
      icon: "🏆",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Average Score",
      value: "0%",
      icon: "📊",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  const quickActions = [
    {
      title: "Explore Mock Tests",
      description: "Find a test and start practicing.",
      icon: "🔍",
      path: "/mock-tests",
      buttonText: "Explore Tests",
    },
    {
      title: "My Results",
      description: "Review your previous test performance.",
      icon: "📈",
      path: "/mock-tests/results",
      buttonText: "View Results",
    },
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

 const handleStartTest = (test) => {
  navigate(`/test/mock-test/${encodeURIComponent(test.slug || test.id)}`, {
    state: { test },
  });
};

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Mock Test Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Welcome back! Practice, track your progress, and prepare for
            success.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl ${stat.color}`}
                >
                  {stat.icon}
                </div>
              </div>

              <p className="mt-4 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {quickActions.map((action) => (
              <div
                key={action.title}
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                    {action.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigation(action.path)}
                  className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:ml-4 sm:mt-0"
                >
                  {action.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Mock Tests */}
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Available Mock Tests
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Choose a test and start preparing.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleNavigation("/mock-tests")}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All Tests →
            </button>
          </div>

          <div className="p-5 sm:p-6">
            {loading ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
                <p className="mt-4 text-sm text-gray-500">
                  Loading available mock tests...
                </p>
              </div>
            ) : error ? (
              <div className="py-10 text-center">
                <p className="text-sm text-red-600">{error}</p>

                <button
                  type="button"
                  onClick={fetchMockTests}
                  className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Try Again
                </button>
              </div>
            ) : mockTests.length === 0 ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
                  📝
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  No mock tests available
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  There are no published mock tests available right now. Please
                  check back later.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {mockTests.map((test) => (
                  <div
                    key={test._id || test.id}
                    className="flex flex-col rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-gray-900">
                        {test.title}
                      </h3>

                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                          test.status === "Published"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {test.status === "Published" ? "Active" : "Inactive"}
                      </span>
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                      {test.description || "Practice and test your knowledge."}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {test.attemptDuration != null
                            ? `${test.attemptDuration} min`
                            : "Not specified"}
                        </p>
                      </div>

                      <div className="rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-500">Total Marks</p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">
                          {test.totalMarks ?? "Not specified"}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleStartTest(test)}
                      className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View Test
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>

            <p className="mt-1 text-sm text-gray-500">
              Keep track of your recent attempts and results.
            </p>
          </div>

          <div className="px-5 py-10 text-center sm:px-6">
            <p className="text-sm text-gray-500">
              Your recent attempts and results will appear here once connected
              to your test-attempt API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestDashboard;
