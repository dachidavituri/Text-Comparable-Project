import { NavLink } from "react-router-dom";
import { navItems, loginInfo } from "@/data/navItems";
import Logo from "!/Logo.png";

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
    isActive
      ? "bg-white text-[#0a2b57] font-semibold"
      : "hover:bg-gray-700 text-white"
  }`;

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between w-64 bg-[#0a2b57] text-white p-4">
      <div>
        <div className="flex items-center py-4 border-b border-gray-600">
          <img src={Logo} alt="logo" className="w-10 h-10 mr-2" />
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
      <div className="mt-6 flex items-center gap-2 border-t border-gray-600 pt-4">
        <div className="w-8 h-8 rounded-full bg-white text-[#0a2b57] flex items-center justify-center font-bold">
          {loginInfo.logoLetter}
        </div>
        <span>{loginInfo.userName}</span>
      </div>
    </div>
  );
};

export default Sidebar;
