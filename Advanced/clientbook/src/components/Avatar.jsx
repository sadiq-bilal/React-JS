import { avatarColors } from "../utils/styles";

// Round circle with the customer's initials
export default function Avatar({ name }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <span className={"inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white " + avatarColors[name.length % avatarColors.length]}>
      {initials}
    </span>
  );
}
