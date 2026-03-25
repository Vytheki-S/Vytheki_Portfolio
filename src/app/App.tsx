import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubStats } from './components/GitHubStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D1A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
}