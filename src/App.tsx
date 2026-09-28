import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";

AOS.init();

function App() {
  return (
    useEffect(() => {AOS.init({ duration: 1000, once: true });}, []),
    <>
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;
