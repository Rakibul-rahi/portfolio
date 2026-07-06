import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactCTA() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1btm9tp", "template_10pdgx5", formRef.current, {
        publicKey: "7uvnA2I1SZOs27211",
      })
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className={`contact-cta-section ${open ? "is-open" : ""}`}>
      <div className="contact-form-area">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Your name" required />

          <label>Email</label>
          <input name="email" type="email" placeholder="your@email.com" required />

          <label>Inquiry Details</label>
          <select name="inquiry" required>
            <option>Flutter App Development</option>
            <option>Web Development</option>
            <option>Freelance Project</option>
            <option>Job Opportunity</option>
          </select>

          <label>Message</label>
          <textarea name="message" placeholder="Write your message" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-button-area">
        <button className="contact-reveal-btn" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Contact Me"}
        </button>
      </div>
    </section>
  );
}

export default ContactCTA;