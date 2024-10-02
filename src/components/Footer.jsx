function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bottom-0 left-0 right-0 flex justify-center items-center mx-auto p-3 text-[10px] md:text-[14px] w-full z-10 h-[80px]">
      <div className="flex items-center dark:text-alltext-dark text-alltext-light">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Salvatore Mammoliti's GitHub"
          className="hover:underline dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
        >
          Salvatore Mammoliti
        </a>
        <div className="ml-2 text-[10px] md:text-[14px] flex items-center">
          <span>&copy; {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
