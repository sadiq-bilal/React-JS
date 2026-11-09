import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, totalPages, onChange }) {
  // no need to show anything for a single page
  if (totalPages <= 1) {
    return null;
  }

  // show 5 page numbers at a time
  let start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);
  start = Math.max(1, end - 4);

  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  function goToPage(number) {
    onChange(number);
    window.scrollTo({ top: 0 });
  }

  const boxClass =
    "h-8 w-8 flex items-center justify-center rounded border text-sm";

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className={boxClass + " bg-white border-gray-200 disabled:opacity-40"}
      >
        <ChevronLeft size={16} />
      </button>

      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => goToPage(number)}
          className={
            boxClass +
            (number === page
              ? " bg-blue-600 border-blue-600 text-white"
              : " bg-white border-gray-200 hover:bg-gray-100")
          }
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className={boxClass + " bg-white border-gray-200 disabled:opacity-40"}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
