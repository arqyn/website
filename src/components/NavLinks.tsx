const NavLinks = () => {
  return (
    <nav aria-label="Main navigation" className="font-light">
      <ul className="flex space-x-6 text-black">
        <li>
          <a
            href="#about"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-all duration-200 hover:text-gray-600 hover:underline underline-offset-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
