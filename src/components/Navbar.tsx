import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <nav className="flex justify-around mx-auto items-center mt-5 font-poppins text-base container">
      <Logo />
      <NavLinks />
      <ActionButton />
    </nav>
  );
};

export default Navbar;
