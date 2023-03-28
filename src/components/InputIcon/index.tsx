import type { ComponentPropsWithoutRef } from "react";
import { ReactElement } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  icon?: ReactElement;
}

export function InputIcon({ icon, ...rest }: InputProps) {
  return (
    <div className="relative flex items-center">
      {icon}
      <input
        className="w-[300px] md:w-80 h-12 px-8 focus:bg-transparent outline-violet-700 hover:border hover:border-violet-700 bg-gray-200 hover:bg-transparent rounded placeholder:text-black"
        {...rest}
      />
    </div>
  );
}
