import PropTypes from 'prop-types';
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";

function Header({ toggleDarkMode, isDarkMode }) {
  const [isActive, setIsActive] = useState(false); // Mobile menu state

  // Toggle the mobile menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="sticky top-0 z-50 w-full p-5 bg-white/70 dark:bg-[#2C3E50]/70 shadow-sm backdrop-blur-md">
      <div className="flex justify-around w-full max-w-screen-xl mx-auto">

        {/* Desktop Navigation and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-5">
          <nav className="flex space-x-5">
            <HashLink
              smooth
              to="#about"
              className="hover:underline dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="#projects"
              className="hover:underline dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              className="hover:underline dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
            >
              Contact
            </HashLink>
            <a
              href="/mammolitiResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
            >
              Resume
            </a>
          </nav>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-6 text-[27px] p-2 focus:outline-none bg-transparent dark:text-alltext-dark text-alltext-light"
          >
            {isDarkMode ? <PiSunDuotone /> : <PiMoonDuotone />}
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Icon on the left */}
          <button
            onClick={toggleActiveClass}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            className="z-50 relative"
          >
            {isActive ? (
              <RxCross1 className="text-[26px] text-title-light dark:text-alltext-dark" />
            ) : (
              <RxHamburgerMenu className="text-[26px] text-title-light dark:text-alltext-dark" />
            )}
          </button>

          {/* Dark Mode Toggle on the right */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-[26px] p-2 focus:outline-none bg-transparent dark:text-alltext-dark text-alltext-light absolute right-4"
          >
            {isDarkMode ? <PiSunDuotone /> : <PiMoonDuotone />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-0 right-0 w-screen h-screen md:hidden bg-[#F7F9F9] dark:bg-[#2C3E50] backdrop-filter p-6 shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] z-40 rounded-b-lg flex justify-center items-center ${
          isActive ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-y-8">
          <li className="text-[20px] block px-4 py-2 dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light">
            <HashLink smooth to="#about" onClick={() => setIsActive(false)}>
              About
            </HashLink>
          </li>
          <li className="text-[20px] block px-4 py-2 dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light">
            <HashLink smooth to="#projects" onClick={() => setIsActive(false)}>
              Projects
            </HashLink>
          </li>
          <li className="text-[20px] block px-4 py-2 dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light">
            <HashLink smooth to="#contact" onClick={() => setIsActive(false)}>
              Contact
            </HashLink>
          </li>
          <li className="text-[20px] block px-4 py-2 mb-32 dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light">
            <a
              href="/mammolitiResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsActive(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
