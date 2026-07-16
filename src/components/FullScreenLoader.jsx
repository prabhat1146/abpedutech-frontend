import React from "react";

const FullScreenLoader = ({
  title = "Please wait",
  message = "Processing your request..."
}) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-md">

      <div className="flex flex-col items-center">

        {/* Animated Loader */}
        <div className="relative w-24 h-24">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-gray-200"></div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-blue-600 border-r-blue-500 animate-spin"></div>

          {/* Inner Circle */}
          <div className="absolute inset-4 rounded-full bg-white shadow-md flex items-center justify-center">

            <svg
              className="w-8 h-8 text-blue-600 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>

          </div>

        </div>

        {/* Text */}

        <h2 className="mt-8 text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="mt-2 text-gray-500 text-center">
          {message}
        </p>

        {/* Animated Dots */}

        <div className="flex gap-2 mt-6">

          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"></span>

          <span
            className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  );
};

export default FullScreenLoader;