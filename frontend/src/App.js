import react from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <SpeedInsights/>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
