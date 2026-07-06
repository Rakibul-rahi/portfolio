import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isDarkArea, setIsDarkArea] = useState(false);

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
        scrollDirection === "down" ? "navbar-hidden" : "navbar-visible"
      } ${isDarkArea ? "navbar-dark" : "navbar-light"}`}
    >
      <nav className="nav-links">
        <a
  href="/Rakibul_Islam_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link"
>
  CV
</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;