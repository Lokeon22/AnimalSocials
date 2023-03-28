import { Link } from "react-router-dom";

interface UserLogadoProps {
  avatar: string;
}

export function UserLogado({ avatar }: UserLogadoProps) {
  return (
    <Link className="w-full h-full" to={"/profile"}>
      <img
        className="w-14 h-14 md:w-16 md:h-16 rounded-full hover:border-violet-700 hover:border-2 hover:ease-in-out hover:duration-200 cursor-pointer"
        src={avatar}
      />
    </Link>
  );
}
