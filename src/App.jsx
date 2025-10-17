import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import Header from "./components/Header";
// import "./components/Header.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Hero from "./components/Hero";
import "./components/Hero.css";
import Projects from "./components/Projects";
import "./components/Projects.css";
import About from "./components/About";
import "./components/About.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";


function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      easing: "ease-in-out",
      once: true, // only animate once
    });
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <main>
        <Hero data-aos="fade-up" />
        <About data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Contact data-aos="fade-up" />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
