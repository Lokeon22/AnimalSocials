import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="w-[300px] md:w-80 h-12 px-2 focus:bg-transparent outline-violet-700 hover:border hover:border-violet-700 bg-gray-200 hover:bg-transparent rounded placeholder:text-black"
      required
      {...rest}
    />
  );
}
