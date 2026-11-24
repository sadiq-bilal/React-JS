// Small switch used to change the view or filter on a page (List/Board, All/Pending/Done)
export default function Toggle({ options, value, onChange }) {
  return (
    <div className="mb-4 inline-flex rounded-lg border border-slate-300 bg-white p-1 text-sm dark:border-slate-600 dark:bg-slate-800">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={"rounded-md px-4 py-1.5 " + (value === option ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
