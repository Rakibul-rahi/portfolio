import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isDarkArea, setIsDarkArea] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleColorChange() {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = window.scrollY / pageHeight;
      setIsDarkArea(scrollPercent > 0.55);
    }

    window.addEventListener("scroll", handleColorChange);
    handleColorChange();

    return () => window.removeEventListener("scroll", handleColorChange);
  }, []);

  return (
    <header
      className={`navbar ${
        scrollDirection === "down" && !menuOpen
          ? "navbar-hidden"
          : "navbar-visible"
      } ${isDarkArea ? "navbar-dark" : "navbar-light"} ${
        menuOpen ? "navbar-menu-open" : ""
      }`}
    >
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="nav-links">
        <a
          href={`${import.meta.env.BASE_URL}Rakibul_Islam_CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          CV
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;