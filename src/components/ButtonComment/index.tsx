import { GiMonkey } from "react-icons/gi";

export function ButtonComment() {
  return (
    <button type="submit">
      <GiMonkey className="w-12 h-12 sm:w-14 sm:h-14 text-amber-900 hover:text-amber-700 hover:ease-in hover:duration-200" />
    </button>
  );
}
