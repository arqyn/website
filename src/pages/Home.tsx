import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./projects";
import Contact from "../components/contact"; 
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
