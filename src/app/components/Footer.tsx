import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D1A] border-t border-[#2A3A4A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl py-12">
        {/* Top Row - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Name and Tagline */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Vytheki Sathiyananthan
            </h3>
            <p className="text-[#8899AA] text-sm">
              Full-Stack Developer & Android Developer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#8899AA] hover:text-[#00A3E0] text-sm transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex md:justify-end gap-4">
            <a
              href="https://github.com/Vytheki-S"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#00A3E0] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vythekie-sathyananthan-a7b2b7245"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#00A3E0] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vythekiesathya@gmail.com"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#00A3E0] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="pt-8 border-t border-[#2A3A4A] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#8899AA] text-sm">
          <p>© {currentYear} Vytheki Sathiyananthan. All rights reserved.</p>
          <p>Built with React + Django</p>
        </div>
      </div>
    </footer>
  );
}
