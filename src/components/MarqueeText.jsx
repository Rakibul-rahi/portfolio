function MarqueeText() {
  const items = [
    "Flutter Developer",
    "Mobile Apps",
    "Android Development",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "REST API",
    "React Developer",
    "Web Development",
    "Responsive Websites",
    "JavaScript",
    "Clean UI",
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default MarqueeText;