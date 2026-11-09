function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center px-4">
      <div className="h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
      <h2 className="mt-4 font-semibold">Loading photos...</h2>
      <p className="mt-1 text-sm text-gray-500">
        Please wait while we fetch the latest images.
      </p>
    </div>
  );
}

export default Loader;
