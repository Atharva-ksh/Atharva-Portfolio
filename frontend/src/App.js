import react from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';



function App() {
  return (
    <main className='text-gray-300 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
