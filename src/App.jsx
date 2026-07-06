import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactCTA from "./components/ContactCTA";
import MarqueeText from "./components/MarqueeText";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <MarqueeText />
        <ContactCTA />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;