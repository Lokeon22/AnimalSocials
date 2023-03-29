import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiUser, FiGrid, FiPlus, FiLogOut } from "react-icons/fi";

import { MenuMobileItem } from "../MenuMobileItem";

interface MenuMobileProps {
  handleLogout: () => void;
}

export function MenuMobile({ handleLogout }: MenuMobileProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className="relative flex sm:hidden"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <AiOutlineMenu className="w-9 h-9 bg-black text-slate-200 px-1 py-1 hover:bg-slate-500 hover:border-2 hover:border-blue-200 hover:duration-75 hover:ease-in" />
      {openMenu && (
        <nav className="fixed right-2 top-[148px] flex gap-3 flex-col itens-center py-3 px-3 min-w-[150px] bg-blue-200 rounded-l-md z-50">
          <MenuMobileItem
            icon={<FiUser className="w-[22px] h-[22px]" />}
            linkto="/profile"
            text="Meu perfil"
          />
          <MenuMobileItem
            icon={<FiGrid className="w-[22px] h-[22px]" />}
            linkto="/profile/userposts"
            text="Postagens"
          />
          <MenuMobileItem
            icon={<FiPlus className="w-[22px] h-[22px]" />}
            linkto="/profile/createpost"
            text="Criar Post"
          />
          <MenuMobileItem
            icon={<FiLogOut className="w-[22px] h-[22px]" />}
            linkto="/"
            text="Sair"
            handleLogout={handleLogout}
          />
        </nav>
      )}
    </div>
  );
}
