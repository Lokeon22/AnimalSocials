interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h2 className="text-3xl mb-5 sm:mb-10">{text}</h2>;
}
