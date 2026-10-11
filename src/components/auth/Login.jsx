import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLeftSideDescription from "./AuthLeftSideDescription";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit  = (e) => {
     e.preventDefault(); // Prevent browser form submission
    navigate("/dashboard", { replace: true });
  };
  
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= Left Section ================= */}

        <AuthLeftSideDescription />
        {/* ================= Right Section ================= */}

        <div className="flex items-center justify-center bg-slate-100 px-6">
          <div className="w-full max-w-md">
            {/* Logo */}
            {/* <img
              src="/assets/logo/logo-1-1-round.png"
              alt="ABPEdutech"
              className="mb-10 h-16 w-16"
            /> */}

            {/* Small Label */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              ADMIN PORTAL
            </p>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-slate-900">Welcome back</h1>

            <p className="mt-3 text-base leading-7 text-slate-500">
              Sign in to manage examinations, question banks, mock tests,
              students and reports.
            </p>

            {/* Form */}
            <form className="mt-10 space-y-6" onSubmit={handleSubmit }>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mobile Number or Email
                </label>

                <input
                  type="text"
                  placeholder="Enter your email or mobile number"
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white px-5 text-slate-800 transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <Link
                    to={"/forgot-password"}
                    replace
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot?
                  </Link>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white px-5 transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" />
                  Keep me signed in
                </label>
              </div>

              <button
                className="h-14 w-full rounded-xl bg-slate-900 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-slate-400">
              © 2026 ABPEdutech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
