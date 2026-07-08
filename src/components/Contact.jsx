import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="contact-transition section">
      <div className="section-header">
        <p className="small-text">Contact</p>
        <h2>Let's build something useful.</h2>
      </div>

      <p className="section-text">
        I'm open for junior Flutter developer roles, mobile app development
        opportunities, freelance projects, and collaboration.
      </p>

      <div className="contact-links">
        <a
          href="mailto:rakibulislam.rahi.rir@gmail.com"
          className="contact-link contact-link-primary"
        >
          <FiMail className="contact-icon" />
          <span>
            <strong>Email Me</strong>
            <small>rakibulislam.rahi.rir@gmail.com</small>
          </span>
        </a>

        <a
          href="https://github.com/Rakibul-rahi"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FiGithub className="contact-icon" />
          <span>
            <strong>GitHub</strong>
            <small>@Rakibul-rahi</small>
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/rakibul-islam-rahi"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FiLinkedin className="contact-icon" />
          <span>
            <strong>LinkedIn</strong>
            <small>rakibul-islam-rahi</small>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;