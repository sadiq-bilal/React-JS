import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 p-4 text-center">
      <p className="text-5xl font-semibold">404</p>
      <p className="text-slate-500 dark:text-slate-400">This page does not exist.</p>
      <Link to="/" className="text-blue-700 hover:underline dark:text-blue-400">Go to dashboard</Link>
    </div>
  );
}
