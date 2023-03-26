import monkey from "../../assets/icons/monkey.svg";

export function Footer() {
  return (
    <footer className="bg-black text-white py-4 flex flex-col items-center gap-2 justify-self-end">
      <img
        className="w-[35px] h-full invert"
        src={monkey}
        alt="Monkey icon logo"
      />
      <span className="text-base">
        AnimalSocials - Todos os direitos reservados
      </span>
    </footer>
  );
}
