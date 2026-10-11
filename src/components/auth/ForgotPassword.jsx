import React from "react";
import { Link } from "react-router-dom";
import AuthLeftSideDescription from "./AuthLeftSideDescription";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <AuthLeftSideDescription />

        {/* Right Section */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <img
                src="/assets/logo/logo-1-1-round.png"
                alt="ABPEdutech"
                className="mx-auto h-16 w-16"
              />
            </div>

            {/* Badge */}
            <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Password Recovery
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold text-slate-900">
              Forgot Password?
            </h1>

            <p className="mt-3 leading-7 text-slate-500">
              Enter your registered email address or mobile number. We'll send
              you an OTP or password reset link to securely recover your account.
            </p>

            {/* Form */}
            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address / Mobile Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your email or mobile number"
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white px-5 shadow-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-slate-900 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                Continue
              </button>

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="h-px flex-1 bg-slate-200"></div>

              <span className="px-4 text-sm text-slate-400">
                Secure Recovery
              </span>

              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {/* Back */}
            <div className="text-center">
              <Link
                to="/login"
                replace
                className="font-medium text-blue-600 transition hover:text-blue-700"
              >
                ← Back to Login
              </Link>
            </div>

            {/* Footer */}
            <p className="mt-10 text-center text-sm text-slate-400">
              © {new Date().getFullYear()} ABPEdutech. All Rights Reserved.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;