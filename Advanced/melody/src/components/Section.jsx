export default function Section({ title, children, grid = false }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className={grid ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" : "flex gap-4 overflow-x-auto pb-2"}>
        {children}
      </div>
    </section>
  );
}
