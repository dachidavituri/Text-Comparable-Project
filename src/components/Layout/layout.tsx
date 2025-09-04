import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import MobileMenu from "../mobileMenu/mobileMenu";
import MobileNavbar from "../mobileNavbar/mobileNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      <main className="flex-1 flex flex-col lg:ml-64 pt-16 lg:pt-0 px-4 lg:px-8">
        {children}
      </main>
    </div>
  );
}
