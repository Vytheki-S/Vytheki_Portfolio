import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D1A]/80 backdrop-blur-md border-b border-[#2A3A4A]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="bg-[#00A3E0] px-4 py-2">
            <span className="font-mono text-white uppercase text-sm font-semibold tracking-wider">
              ONLINE PORTFOLIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#00A3E0] font-semibold'
                      : 'text-[#8899AA] hover:text-[#00A3E0] font-normal'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D1A] border-t border-[#2A3A4A] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'text-[#00A3E0] font-semibold bg-[#00A3E0]/10'
                        : 'text-[#8899AA] hover:text-[#00A3E0]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
