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
import { HomeIcon } from '@heroicons/react/solid';



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font overflow-x-hidden'>
      <SpeedInsights />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <button
        className="fixed bottom-4 left-4 bg-gray-800 text-white px-2 py-2 rounded-lg shadow-md hover:bg-gray-700"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <HomeIcon className="h-7 w-7" />
      </button>
    </main>
  );
}

export default App;
