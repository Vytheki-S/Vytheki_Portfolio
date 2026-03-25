import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2024 - Present',
      description: 'Developing custom websites and web applications for clients, specializing in modern frameworks and responsive design.',
      achievements: [
        'Successfully delivered Jaffna Thirvalluvar Cultural Center website',
        'Built multiple responsive web applications using React and Django',
        'Implemented custom CMS solutions for client needs',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'University Research Lab',
      location: 'Sri Lanka',
      period: '2023 - 2024',
      description: 'Worked on data analysis projects using Python, focusing on machine learning and statistical modeling.',
      achievements: [
        'Developed predictive models using Scikit-learn and Pandas',
        'Analyzed large datasets to extract actionable insights',
        'Collaborated with research team on academic publications',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-[#00A3E0]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 lg:pl-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#2A3A4A]" />

          {/* Experience Entries */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Circle dot marker */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-[#00A3E0] rounded-full -translate-x-[7px] ring-4 ring-[#0D0D1A]" />

              {/* Experience Card */}
              <div className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 lg:p-8 hover:border-[#00A3E0] transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00A3E0]/20 border border-[#00A3E0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-[#00A3E0]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[#00A3E0] font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-[#8899AA] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-[#8899AA] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#8899AA]">
                            <div className="w-1.5 h-1.5 bg-[#00A3E0] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
