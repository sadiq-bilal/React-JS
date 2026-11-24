import { statusColor } from "../utils/styles";

export default function Badge({ text }) {
  return <span className={"inline-block rounded-full px-2.5 py-0.5 text-xs font-medium " + statusColor[text]}>{text}</span>;
}
