import { useState } from "react";
import Sidebar from "&/sidebar";
import MobileMenu from "&/mobileMenu";
import MobileNavbar from "&/mobileNavbar";
import type { LayoutProps } from "./index.types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      <main className="flex-1 flex flex-col pt-16 lg:pt-0 px-4 lg:px-8 justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
