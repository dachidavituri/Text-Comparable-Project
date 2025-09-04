import { NavLink } from "react-router-dom";
import {navItems} from '../../data/navItems'

interface Props {
  setMenuOpen: (value: boolean) => void;
}

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
    isActive
      ? "bg-white text-[#0a2b57] font-semibold"
      : "hover:bg-gray-700 text-white"
  }`;

export default function MobileMenu({ setMenuOpen }: Props) {
  return (
    <div className="lg:hidden fixed top-14 left-0 right-0 bg-[#0a2b57] text-white p-4 z-40 shadow-lg">
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
    </div>
  );
}
