import { Images } from "lucide-react";

// Shown when there is nothing to show (no search result, no favorites...)
function EmptyState({ title, text, children }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      <Images size={42} className="text-gray-400" />
      <h2 className="mt-4 font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{text}</p>
      {children}
    </div>
  );
}

export default EmptyState;
