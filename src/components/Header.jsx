import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="relative flex justify-center items center top-0 z-50">
      <div className="flex justify-center items-center p-10 text-[20px]">
        {/* Hamburger for mobile */}
        <div className="md:hidden absolute left-4 top-4 z-50">
          <button
            onClick={toggleActiveClass}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            className="flex items-center"
          >
            <span className="">
              {isActive ? (
                <RxCross1 className="text-[35px] text-highlight-light dark:text-highlight-dark" />
              ) : (
                <RxHamburgerMenu className="text-[35px] text-highlight-light dark:text-highlight-dark" />
              )}
            </span>
          </button>
        </div>

        <nav className="hidden md:flex space-x-5">
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
              <HashLink
                smooth
                to="#projects"
                onClick={() => setIsActive(false)}
              >
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
      </div>
    </header>
  );
}

export default Header;