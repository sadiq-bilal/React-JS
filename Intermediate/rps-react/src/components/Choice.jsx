export default function Choice({ id, image, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      aria-label={id}
      className="group flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full border-2 border-edge bg-panel p-0 shadow-lg shadow-black/40 transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-accent/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-95"
    >
      <img
        src={image}
        alt={id}
        className="h-[192px] w-[192px] rounded-full object-cover opacity-90 transition group-hover:opacity-100"
      />
    </button>
  )
}
