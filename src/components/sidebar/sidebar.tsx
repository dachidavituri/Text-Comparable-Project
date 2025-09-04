import { NavLink } from "react-router-dom";
import {navItems} from '../../data/navItems'

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
    isActive
      ? "bg-white text-[#0a2b57] font-semibold"
      : "hover:bg-gray-700 text-white"
  }`;

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-[#0a2b57] text-white p-4">
      <div className="flex items-center justify-center py-4 border-b border-gray-600">
        <img
          src="https://dummyimage.com/40x40/fff/000.png&text=E"
          alt="logo"
          className="w-10 h-10 mr-2"
        />
        <h1 className="text-lg font-bold">ENAGRAM</h1>
      </div>
      <nav className="flex flex-col mt-6 space-y-2">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkStyle}>
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
