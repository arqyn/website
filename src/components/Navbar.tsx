import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionButton from "./ActionButton";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex justify-around mx-auto items-center mt-5 font-poppins text-base container relative">
      <Logo />
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4">
        <NavLinks />
        <ActionButton />
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-20"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle mobile menu"
      >
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-10 transform transition-transform duration-300 md:hidden flex flex-col items-center pt-20 gap-8 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <NavLinks />
        <ActionButton />
      </div>
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-0 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
