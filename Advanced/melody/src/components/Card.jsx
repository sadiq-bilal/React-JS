import { Link } from "react-router-dom";
import Cover from "./Cover";

export default function Card({ to, image, title, subtitle, round = false }) {
  return (
    <Link to={to} className="group w-40 shrink-0 md:w-44">
      <Cover
        src={image}
        alt={title}
        className={`aspect-square w-full transition group-hover:brightness-75 ${round ? "rounded-full" : "rounded-lg"}`}
      />
      <p className={`mt-2 truncate text-sm font-medium ${round ? "text-center" : ""}`}>{title}</p>
      {subtitle && (
        <p className={`truncate text-xs text-zinc-400 ${round ? "text-center" : ""}`}>{subtitle}</p>
      )}
    </Link>
  );
}
