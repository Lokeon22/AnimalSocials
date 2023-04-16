import { Link } from "react-router-dom";
import { useUser } from "../../context/auth";
import { useUserChat } from "../../context/chat";
import {
  FiUser,
  FiGrid,
  FiPlus,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";

import { MenuMobile } from "./MenuMobile";

export function AccountMenu() {
  const { user, handleLogout } = useUser();
  const { handleChatLoguin } = useUserChat();

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
        <div
          onClick={() => handleChatLoguin(user)}
          className="w-10 h-10 px-2 py-1 bg-black rounded hover:bg-gray-500 hover:border-blue-500 hover:border-2 cursor-pointer"
        >
          <FiMessageSquare className="text-white w-full h-full" />
        </div>
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
