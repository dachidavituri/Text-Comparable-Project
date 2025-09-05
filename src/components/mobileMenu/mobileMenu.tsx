import { NavLink } from "react-router-dom";
import { navItems, loginInfo } from "@/data/navItems";
import type { Props } from "./index.types";

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
    isActive
      ? "bg-white text-[#0a2b57] font-semibold"
      : "hover:bg-gray-700 text-white"
  }`;

const MobileMenu: React.FC<Props> = ({ setMenuOpen }) => {
  return (
    <div className="lg:hidden fixed top-14 left-0 right-0 bg-[#0a2b57] text-white p-4 z-40 shadow-lg flex flex-col justify-between min-h-[calc(100vh-3.5rem)]">
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={navLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-6 flex items-center gap-2 border-t border-gray-600 pt-4">
        <div className="w-8 h-8 rounded-full bg-white text-[#0a2b57] flex items-center justify-center font-bold">
          {loginInfo.logoLetter}
        </div>
        <span>{loginInfo.userName}</span>
      </div>
    </div>
  );
};
export default MobileMenu;
