import { Link } from "react-router-dom";
import { useUser } from "../../context/auth";
import { FiUser, FiGrid, FiPlus, FiLogOut } from "react-icons/fi";

import { MenuMobile } from "./MenuMobile";

export function AccountMenu() {
  const { handleLogout } = useUser();

  return (
    <>
      <h2 className="text-4xl font-bold">Minha Conta</h2>
      <nav className="hidden sm:flex items-center gap-4">
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
          onClick={handleLogout}
        >
          <FiLogOut className="text-white w-full h-full" />
        </Link>
      </nav>
      <MenuMobile handleLogout={handleLogout} />
    </>
  );
}
