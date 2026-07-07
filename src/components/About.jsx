function About() {
  return (
    <section id="about" className="about section">
      <div className="about-layout">
        <div className="about-content">
          <div className="section-header">
            <p className="small-text">About Me</p>
            <h2>Focused on building useful digital products.</h2>
          </div>

          <p className="section-text">
            I am a Computer Science and Engineering undergraduate at Ahsanullah
            University of Science and Technology with hands-on experience in
            Flutter, Dart, Firebase, Kotlin, Android development, React, and REST
            API integration. I enjoy building apps that solve real problems and
            improve user experience.
          </p>

          <div className="education-info">
            <p>
              <strong>BSc in CSE</strong> — Ahsanullah University of Science and
              Technology
            </p>
            <p>
              <strong>HSC</strong> — Dhaka City College
            </p>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}rakibul.png`}
            alt="Rakibul Islam"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;