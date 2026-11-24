import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CareerHighlights from './components/CareerHighlights';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CareerHighlights />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
