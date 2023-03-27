import { ReactElement } from "react";

interface InputProps {
  icon?: ReactElement;
  place: string;
  type: string;
  name: string;
}

export function InputIcon({ place, type, name, icon }: InputProps) {
  return (
    <div className="relative flex items-center">
      {icon}
      <input
        className="w-[300px] md:w-80 h-12 px-8 focus:bg-transparent outline-violet-700 hover:border hover:border-violet-700 bg-gray-200 hover:bg-transparent rounded placeholder:text-black"
        type={type}
        placeholder={place}
        name={name}
        required
      />
    </div>
  );
}
