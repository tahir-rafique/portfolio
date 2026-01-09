"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center min-h-dvh w-full overflow-hidden relative p-4 px-3 sm:px-4 md:px-6 bg-background">
      {/* Main 404 content */}
      <div className="z-10 flex-col-center gap-4 xs:gap-6 sm:gap-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto text-center text-primary">
        <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-4 my-4 sm:my-6">
          <span className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-pri">
            4
          </span>
          <span className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-pri relative">
            0
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] xs:w-[35%] sm:w-[40%] md:w-[45%] lg:w-1/2 h-auto"
            >
              <circle
                cx="35"
                cy="40"
                r="8"
                fill="currentColor"
                className="text-text"
              />
              <circle
                cx="65"
                cy="40"
                r="8"
                fill="currentColor"
                className="text-text"
              />
              <path
                d="M30 70 Q50 85 70 70"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-text"
              />
            </svg>
          </span>
          <span className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-pri">
            4
          </span>
        </div>

        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Oops! Page Not Found
        </h1>

        <p className="text-base xs:text-lg text-text/80 max-w-[90%] xs:max-w-md mx-auto">
          The page you&apos;re looking for seems to have wandered off. Perhaps
          it&apos;s on a digital vacation?
        </p>

        <div className="mt-4 sm:mt-6 md:mt-8 w-full xs:w-auto">
          <button
            onClick={() => router.push("/")}
            className="w-fit xs:w-auto px-6 sm:px-8 py-2 sm:py-4 bg-pri text-pri-text rounded-full font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90 relative overflow-hidden group "
          >
            <span className="relative z-10 group-hover:text-pri">
              Return Home
            </span>
            <span className="absolute inset-0 w-0 bg-bg bg-opacity-30 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
