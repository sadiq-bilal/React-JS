// Tailwind class names that are used in many places

export const statusColor = {
  Lead: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Active: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Inactive: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  New: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Negotiation: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Won: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Lost: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export const barColor = { New: "bg-blue-500", Negotiation: "bg-amber-500", Won: "bg-emerald-500", Lost: "bg-red-500" };

export const columnColor = {
  New: "bg-blue-100 dark:bg-blue-950",
  Negotiation: "bg-amber-100 dark:bg-amber-950",
  Won: "bg-emerald-100 dark:bg-emerald-950",
  Lost: "bg-red-100 dark:bg-red-950",
};

export const avatarColors = ["bg-blue-600", "bg-emerald-600", "bg-orange-500", "bg-pink-600", "bg-violet-600"];

export const inputClass = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100";

export const primaryBtn = "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900";

export const cardClass = "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800";

// Coloured left edge on each row, so Deals and Tasks look the same
export const borderColor = {
  New: "border-l-blue-500",
  Negotiation: "border-l-amber-500",
  Won: "border-l-emerald-500",
  Lost: "border-l-red-500",
};
