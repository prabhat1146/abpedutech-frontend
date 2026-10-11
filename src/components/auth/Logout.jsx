import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl text-green-600">✓</span>
        </div>

        <h1 className="mb-3 text-3xl font-bold text-gray-800">
          Logged Out Successfully
        </h1>

        <p className="mb-8 text-gray-600">
          You have been logged out of your account. Thank you for visiting. We
          hope to see you again soon!
        </p>

        <div className="space-y-3">
          <Link
            to="/login"
            className="block w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Login Again
          </Link>

          <Link
            to="/"
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;