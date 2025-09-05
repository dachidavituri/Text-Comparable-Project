import { Menu, X } from "lucide-react";
import type { Props } from "./index.types";

const MobileNavbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#0a2b57] text-white flex items-center justify-between px-4 py-3 shadow-md z-50">
      <div className="flex items-center">
        <img
          src="https://dummyimage.com/30x30/fff/000.png&text=E"
          alt="logo"
          className="w-8 h-8 mr-2"
        />
        <h1 className="text-lg font-bold">ENAGRAM</h1>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};

export default MobileNavbar;
