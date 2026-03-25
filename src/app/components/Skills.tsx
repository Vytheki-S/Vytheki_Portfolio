import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & Web',
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 82 },
        { name: 'TypeScript', level: 72 },
        { name: 'React', level: 78 },
        { name: 'Tailwind CSS', level: 82 },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Django', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'REST APIs', level: 75 },
        { name: 'JWT Authentication', level: 68 },
      ],
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'Android / Kotlin', level: 65 },
        { name: 'Firebase', level: 60 },
        { name: 'Jetpack Compose', level: 55 },
      ],
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Python', level: 62 },
        { name: 'Pandas', level: 55 },
        { name: 'NumPy', level: 52 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 72 },
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'SQLite', level: 72 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 78 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const techPills = [
    'React',
    'Django',
    'TypeScript',
    'Python',
    'Kotlin',
    'Figma',
    'Git',
    'MongoDB',
    'MySQL',
    'Firebase',
    'Tailwind',
  ];

  return (
    <section id="skills" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-[#00A3E0]" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    {/* Skill Name and Percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#8899AA] text-sm">{skill.name}</span>
                      <span className="text-[#00A3E0] text-sm font-semibold font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="h-1.5 bg-[#2A3A4A] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-[#00A3E0] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-3 pt-8"
        >
          {techPills.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#111827] border border-[#2A3A4A] rounded-full text-[#8899AA] text-sm font-mono hover:border-[#00A3E0] hover:text-[#00A3E0] transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
