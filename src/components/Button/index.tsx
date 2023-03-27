interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 w-32 py-2 rounded-md text-slate-200 hover:bg-blue-600 hover:text-white ease-in duration-200"
      type="submit"
    >
      {text}
    </button>
  );
}
