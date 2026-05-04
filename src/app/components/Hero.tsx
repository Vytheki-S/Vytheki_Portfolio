import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';
import profileImage from '../../assets/9a0061e7ead208f44ad3810e09cac69a38d0be5c.png';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with radial gradient glow */}
      <div className="absolute inset-0 bg-[#0D0D1A]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#7B2FBE] via-[#00A3E0] to-transparent opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 max-w-7xl">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Hello Text */}
            <p className="font-mono text-[#00A3E0] italic text-lg">
              Hello !!!
            </p>

            {/* Name */}
            <h1 className="text-white font-extrabold text-5xl lg:text-7xl leading-tight">
              I'm Vytheki
              <br />
              Sathiyananthan
            </h1>

            {/* Role Box */}
            <div className="space-y-3">
              <div className="inline-block bg-[#00A3E0] px-4 py-2">
                <span className="font-mono text-white uppercase tracking-wider text-sm font-semibold">
                  FULL-STACK DEVELOPER
                </span>
              </div>
              <p className="text-[#8899AA] text-sm font-mono">
                Data Science Undergraduate | Data Analyst | Full-Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-[#8899AA] text-base lg:text-lg leading-relaxed max-w-xl">
              Motivated 3rd-year IT undergraduate specializing in data science and full-stack development. Experienced in data analysis using Python and SQL, and building insight-driven applications that turn data into clear, actionable outcomes. Passionate about scalable systems and user-focused design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="bg-[#00A3E0] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#0092c9] transition-all hover:shadow-[0_0_20px_rgba(0,163,224,0.4)]"
              >
                View My Projects
              </button>
              <a
                href="/Vytheki_SE.pdf"
                download="Vytheki_SE.pdf"
                className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0D0D1A] transition-all"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Vytheki-S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/vythekie-sathyananthan-a7b2b7245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00A3E0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient ring border with outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3E0] via-[#7B2FBE] to-[#00A3E0] rounded-full blur-md opacity-60" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-[#00A3E0] via-[#7B2FBE] to-[#00A3E0]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0D0D1A]">
                  <img
                    src={profileImage}
                    alt="Vytheki Sathiyananthan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative flex items-center">
            <div className="absolute left-0 w-2 h-2 bg-white rounded-full" />
            <div className="w-full h-px bg-[#2A3A4A] mx-2" />
            <div className="absolute right-0 w-2 h-2 bg-white rounded-full" />
          </div>
          <p className="text-[#8899AA] text-sm font-mono text-right mt-2">
            PORTFOLIO 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
