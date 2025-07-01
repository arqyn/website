const NavLinks = () => {
  return (
    <nav aria-label="Main navigation" className="font-light">
      <ul className="flex md:flex-row flex-col  space-x-6 text-black">
        <li>
          <a
            href="#about"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4 font-semibold"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4 font-semibold"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4 font-semibold"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4 font-semibold"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
