

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <a href="#home">Home</a>
        </div>

        <div className="footer-column">
          <a href="#projects">Projects</a>
         <a
  href="/Rakibul_Islam_CV.pdf"
  download="Rakibul_Islam_CV.pdf"
  className="footer-link"
>
  Download CV
</a>
        </div>

        <div className="footer-column">
          <a
            href="https://www.linkedin.com/in/rakibul-islam-rahi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Rakibul-rahi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="footer-copy">© 2026 Rakibul Islam Rahi</p>
      </div>

      <div className="footer-name">
        <p>Junior Full-Stack Developer</p>
        <h2>Rakibul Islam</h2>
        
      </div>
    </footer>
  );
}

export default Footer;