import { Link } from "react-router-dom";

interface MobileItemProps {
  linkto: string;
  icon: React.ReactNode;
  text: string;
  handleLogout?: () => void;
}

export function MenuMobileItem({
  linkto,
  icon,
  text,
  handleLogout,
}: MobileItemProps) {
  return (
    <Link
      to={linkto}
      className="flex gap-2 items-center hover:text-white"
      onClick={handleLogout}
    >
      {icon}
      <span className="hover:text-black">{text}</span>
    </Link>
  );
}
