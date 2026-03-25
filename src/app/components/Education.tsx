import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const modules = [
    'Data Structures',
    'Algorithms',
    'Web Development',
    'Mobile Development',
    'Database Systems',
    'Software Engineering',
    'Data Science Fundamentals',
  ];

  return (
    <section id="education" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-[#00A3E0]" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 lg:pl-12"
        >
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#2A3A4A]" />
          
          {/* Circle dot marker */}
          <div className="absolute left-0 top-2 w-4 h-4 bg-[#00A3E0] rounded-full -translate-x-[7px] ring-4 ring-[#0D0D1A]" />

          {/* Education Card */}
          <div className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 lg:p-7 hover:border-[#00A3E0] transition-all">
            <div className="space-y-4">
              {/* Institution */}
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                SLIIT Northern University
              </h3>

              {/* Degree */}
              <div>
                <p className="text-white font-semibold text-lg">
                  BSc (Hons) Information Technology
                </p>
                <p className="text-[#00A3E0] font-medium">
                  — Data Science Specialization
                </p>
              </div>

              {/* Duration */}
              <p className="text-[#8899AA]">
                2022 – Present (Expected 2025)
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-[#00A3E0]/20 border border-[#00A3E0]/30 rounded-full">
                <span className="text-[#00A3E0] text-sm font-medium">
                  3rd Year, 1st Semester
                </span>
              </div>

              {/* Modules List */}
              <div className="pt-2">
                <p className="text-[#8899AA] text-sm leading-relaxed">
                  {modules.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
