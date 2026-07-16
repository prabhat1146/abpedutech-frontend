import React from "react";

import StatCard from "./components/StatCard";
import RecentTests from "./components/RecentTests";
import ActivityFeed from "./components/ActivityFeed";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>

          <p className="mt-1 text-slate-500">Manage ABP EduTech platform</p>
        </div>

        {/* Stats */}

        <div className="grid gap-5 md:grid-cols-4">
          <StatCard
            title="Students"
            value="25,430"
            icon="👨‍🎓"
            onDetails={() => navigate("/admin/students")}
          />

          <StatCard
            title="Teachers"
            value="420"
            icon="👨‍🏫"
            onDetails={() => navigate("/admin/teachers")}
          />

          <StatCard
            title="Courses"
            value="120"
            icon="📚"
            onDetails={() => navigate("/admin/courses")}
          />
          <StatCard
            title="Subjects"
            value="120"
            icon="📘"
            onDetails={() => navigate("/user/admin/course/subjects/subjects-dashboard")}
          />

          <StatCard
            title="Chapters"
            value="560"
            icon="📖"
            onDetails={() => navigate("/admin/academic/chapters")}
          />

          <StatCard
            title="Topics"
            value="2,430"
            icon="📝"
            onDetails={() => navigate("/admin/academic/topics")}
          />

          <StatCard
            title="Sub Topics"
            value="8,120"
            icon="🏷️"
            onDetails={() => navigate("/admin/academic/subtopics")}
          />
          <StatCard
            title="Questions"
            value="8,500"
            icon="📝"
            onDetails={() => navigate("/user/admin/questions")}
          />

          <StatCard
            title="Mock Tests"
            value="350"
            icon="📋"
            onDetails={() => navigate("/admin/mock-tests")}
          />

          <StatCard
            title="PYQ Tests"
            value="150"
            icon="🎯"
            onDetails={() => navigate("/admin/pyq-tests")}
          />

          <StatCard
            title="Revenue"
            value="₹12.45L"
            subtitle="This Month"
            trend="+18.5%"
            icon="💰"
            onDetails={() => navigate("/admin/revenue")}
          />

          <StatCard
            title="Active Users"
            value="18,240"
            icon="🟢"
            onDetails={() => navigate("/admin/users")}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Main */}

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div
                className="
flex
justify-between
items-center
mb-5
"
              >
                <h2 className="font-semibold text-lg">Recent Tests</h2>

                <button
                  className="
text-sm
text-indigo-600
"
                >
                  View All
                </button>
              </div>

              <RecentTests />
            </div>

            <div
              className="
rounded-2xl
bg-white
p-6
shadow-sm
"
            >
              <h2 className="mb-5 font-semibold text-lg">Latest Activity</h2>

              <ActivityFeed />
            </div>
          </div>

          {/* Right */}

          <div
            className="
rounded-2xl
bg-white
p-6
shadow-sm
"
          >
            <h2
              className="
font-semibold
text-lg
mb-5
"
            >
              Quick Actions
            </h2>

            <div className="space-y-3">
              <Action text="Create Course" />

              <Action text="Add Question" />

              <Action text="Create Test" />

              <Action text="Manage Users" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Action = ({ text }) => (
  <button
    className="
w-full
rounded-xl
bg-slate-100
p-4
text-left
font-medium
hover:bg-indigo-100
hover:text-indigo-700
"
  >
    {text}
  </button>
);

export default AdminDashboard;
