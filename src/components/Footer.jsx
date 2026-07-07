

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
  href={`${import.meta.env.BASE_URL}Rakibul_Islam_CV.pdf`}
  target="_blank"
  rel="noopener noreferrer"
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