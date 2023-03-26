import { Link } from "react-router-dom";
import monkey from "../../assets/icons/monkey.svg";
import login from "../../assets/icons/login.svg";

export function Header() {
  return (
    <header className="w-full h-full flex justify-between items-center border-b px-4 py-4">
      <img
        src={monkey}
        className="md:max-w-[65px] max-w-[55px]"
        alt="Monkey logo"
      />
      <div className="flex items-center gap-4">
        <Link to={"/login"}>Login / Criar</Link>
        <img src={login} className="max-w-[20px]" alt="User login icon" />
      </div>
    </header>
  );
}
