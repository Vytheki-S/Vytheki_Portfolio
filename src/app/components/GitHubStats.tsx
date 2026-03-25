import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Star, GitCommit, GitPullRequest, AlertCircle } from 'lucide-react';

export function GitHubStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: Star, label: 'Total Stars', value: '2' },
    { icon: GitCommit, label: 'Total Commits', value: '82' },
    { icon: GitPullRequest, label: 'Total PRs', value: '1' },
    { icon: AlertCircle, label: 'Total Issues', value: '0' },
  ];

  const languages = [
    { name: 'TypeScript', percentage: 35, color: '#3178C6' },
    { name: 'Python', percentage: 25, color: '#3776AB' },
    { name: 'Java', percentage: 18, color: '#007396' },
    { name: 'JavaScript', percentage: 12, color: '#F7DF1E' },
    { name: 'PHP', percentage: 10, color: '#777BB4' },
  ];

  return (
    <section id="github" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">GitHub Activity</h2>
          <div className="w-20 h-1 bg-[#00A3E0] mb-4" />
          <p className="text-[#8899AA] text-lg">101 contributions in the last year</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 hover:border-[#00A3E0] transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-6">GitHub Stats</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[#00A3E0] mt-1" />
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-[#8899AA] text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-[#2A3A4A]">
              <div className="text-[#8899AA] text-sm">Contributed to</div>
              <div className="text-2xl font-bold text-white">4 repos</div>
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 hover:border-[#00A3E0] transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-6">Top Languages</h3>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-white text-sm font-medium">{lang.name}</span>
                    </div>
                    <span className="text-[#8899AA] text-sm font-mono">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#2A3A4A] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Streak Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#111827] border border-[#2A3A4A] rounded-xl p-6 lg:col-span-2 hover:border-[#00A3E0] transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-6">Streak Stats</h3>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00A3E0] mb-2">0</div>
                <div className="text-[#8899AA] text-sm">Current Streak</div>
                <div className="text-[#8899AA] text-xs mt-1">days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7B2FBE] mb-2">4</div>
                <div className="text-[#8899AA] text-sm">Longest Streak</div>
                <div className="text-[#8899AA] text-xs mt-1">days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#22C55E] mb-2">101</div>
                <div className="text-[#8899AA] text-sm">Total Contributions</div>
                <div className="text-[#8899AA] text-xs mt-1">last year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
