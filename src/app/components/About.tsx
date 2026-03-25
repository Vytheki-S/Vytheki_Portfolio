import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from './CountUp';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: 5, label: 'Projects Completed', suffix: '+' },
    { value: 12, label: 'Technologies Known', suffix: '+' },
    { value: 101, label: 'GitHub Contributions', suffix: '' },
    { value: 1, label: 'Real Client Projects', suffix: '' },
  ];

  return (
    <section id="about" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-[#00A3E0]" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 text-center hover:border-[#00A3E0] transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#00A3E0] mb-2">
                  {inView ? <CountUp end={stat.value} duration={2} /> : '0'}
                  {stat.suffix}
                </div>
                <p className="text-[#8899AA] text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
            
            <p className="text-[#8899AA] leading-relaxed">
              Motivated 3rd-year IT undergraduate with hands-on experience in full-stack web and Android development. 
              Passionate about building real-world, scalable, and user-focused systems with clean code.
            </p>

            {/* Currently Seeking Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/20 border border-[#22C55E] rounded-full">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-[#22C55E] text-sm font-medium">
                Actively seeking internships & junior roles 2026
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-[#8899AA] text-sm">University</p>
                <p className="text-white font-medium">SLIIT Northern University</p>
              </div>
              <div>
                <p className="text-[#8899AA] text-sm">Degree</p>
                <p className="text-white font-medium">BSc IT — Data Science</p>
              </div>
              <div>
                <p className="text-[#8899AA] text-sm">Year</p>
                <p className="text-white font-medium">3rd Year, 1st Semester</p>
              </div>
              <div>
                <p className="text-[#8899AA] text-sm">Location</p>
                <p className="text-white font-medium">Jaffna, Sri Lanka</p>
              </div>
              <div>
                <p className="text-[#8899AA] text-sm">Email</p>
                <p className="text-white font-medium text-xs sm:text-sm break-all">
                  vythekiesathya@gmail.com
                </p>
              </div>
              <div>
                <p className="text-[#8899AA] text-sm">GitHub</p>
                <a
                  href="https://github.com/Vytheki-S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A3E0] hover:underline font-medium text-xs sm:text-sm break-all"
                >
                  github.com/Vytheki-S
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
