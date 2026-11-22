const fallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='#222'/><circle cx='100' cy='100' r='36' fill='#333'/></svg>`
  );

export default function Cover({ src, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback;
      }}
      className={`object-cover bg-[#222] ${className}`}
    />
  );
}
