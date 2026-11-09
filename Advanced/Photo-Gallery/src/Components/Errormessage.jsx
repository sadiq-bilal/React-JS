import { CircleAlert } from "lucide-react";

function Errormessage({ message = "Failed to load photos", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center px-4">
      <CircleAlert size={42} className="text-red-500" />
      <h2 className="mt-4 font-semibold">{message}</h2>
      <p className="mt-1 text-sm text-gray-500">
        Something went wrong. Please try again.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default Errormessage;
