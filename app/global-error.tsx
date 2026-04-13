"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center min-h-dvh w-full overflow-hidden relative p-4 bg-background">
      <div className="text-center space-y-6">

        <h1 className="text-3xl font-bold">Something broke 😵</h1>

        <p className="text-text/70">
          {error.message || "Unexpected error occurred"}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-pri text-white rounded-full"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 border rounded-full"
          >
            Go Home
          </button>
        </div>

      </div>
    </div>
  );
}