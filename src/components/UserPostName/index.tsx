import { Link } from "react-router-dom";
interface PostNameProps {
  id: number | string;
  username: string | undefined;
}

export function UserPostName({ username, id }: PostNameProps) {
  return (
    <Link to={`/userperfil/${id}`} className="w-max">
      <p className="text-lg text-gray-400 mb-2 hover:text-gray-500 hover:duration-200">
        @{username}
      </p>
    </Link>
  );
}
