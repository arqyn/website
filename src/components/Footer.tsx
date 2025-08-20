import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Get the current year dynamically to keep the footer up to date automatically
  const currentYear = new Date().getFullYear();

  // Reusable icon size for consistent styling across social icons
  const iconSize = 18;

  return (
    <footer className=" text-white border-t border-gray-800">
      {/* divider */}
      <div className="border-t border-white"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img
                src="/arqyn_dev_logo.jpg"
                alt="Arqyn Logo"
                className="h-10 w-10 rounded-sm mr-3 object-cover"
              />
              <span className="text-2xl font-bold font-poppins">ARQYN</span>
            </div>
            <p className="text-gray-400 font-merriweather">
              Building civic technology for social impact and community
              empowerment.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-start md:justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-poppins">
                Navigate
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors font-merriweather block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors font-merriweather block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors font-merriweather block"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors font-merriweather block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors font-merriweather block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="flex justify-start md:justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-poppins">
                Connect
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaLinkedin size={iconSize} className="mr-2" />
                    <span className="font-merriweather text-sm">LinkedIn</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-300 transition-colors flex items-center"
                  >
                    <FaGithub size={iconSize} className="mr-2" />
                    <span className="font-merriweather text-sm">GitHub</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <FaTwitter size={iconSize} className="mr-2" />
                    <span className="font-merriweather text-sm">X</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition-colors flex items-center"
                  >
                    <FaEnvelope size={iconSize} className="mr-2" />
                    <span className="font-merriweather text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-12 pt-6">
          <p className="text-gray-200 text-sm font-merriweather text-center">
            © {currentYear} Arqyn. All rights reserved.
          </p>

          {/* Not sure if this will be needed later */}
          {/* <div className="flex justify-center space-x-4 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm font-merriweather"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm font-merriweather"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
