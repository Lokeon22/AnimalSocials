interface TitleProps {
  text: string;
  size?: "normal" | "large";
  color?: string;
  weight?: "normal" | "semibold";
}

export function Title({
  text,
  size = "normal",
  color = "black",
  weight = "normal",
}: TitleProps) {
  return (
    <h2
      style={{
        fontSize: size === "normal" ? "1.5rem" : "1.8rem",
        color: color,
        fontWeight: weight === "normal" ? "400" : "600",
      }}
      className="mb-5"
    >
      {text}
    </h2>
  );
}
