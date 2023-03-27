import { Link } from "react-router-dom";
import { FiUser, FiGrid, FiPlus, FiLogOut } from "react-icons/fi";

export function AccountMenu() {
  return (
    <>
      <h2 className="text-4xl font-bold">Minha Conta</h2>
      <nav className="flex items-center gap-4">
        <Link
          className="w-10 h-10 px-2 py-1 bg-black rounded hover:bg-gray-500 hover:border-blue-500 hover:border-2"
          to="/profile"
        >
          <FiUser className="text-white w-full h-full" />
        </Link>
        <Link
          className="w-10 h-10 px-2 py-1 bg-black rounded hover:bg-gray-500 hover:border-blue-500 hover:border-2"
          to="/profile/userposts"
        >
          <FiGrid className="text-white w-full h-full" />
        </Link>
        <Link
          className="w-10 h-10 px-2 py-1 bg-black rounded hover:bg-gray-500 hover:border-blue-500 hover:border-2"
          to="/profile/createpost"
        >
          <FiPlus className="text-white w-full h-full" />
        </Link>
        <Link
          className="w-10 h-10 px-2 py-1 bg-black rounded hover:bg-gray-500 hover:border-blue-500 hover:border-2"
          to="/"
        >
          <FiLogOut className="text-white w-full h-full" />
        </Link>
      </nav>
    </>
  );
}
