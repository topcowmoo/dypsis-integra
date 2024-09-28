function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Salvatore Mammoliti</p>

      <div className="text-[14px]">
        <span>&copy; {currentYear}</span>
      </div>
    </footer>
  );
}

export default Footer;
