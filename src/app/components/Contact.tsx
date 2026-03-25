import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vythekiesathya@gmail.com',
      link: 'mailto:vythekiesathya@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Vytheki-S',
      link: 'https://github.com/Vytheki-S',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vythekie-sathyananthan-a7b2b7245',
      link: 'https://linkedin.com/in/vythekie-sathyananthan-a7b2b7245',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaffna, Sri Lanka',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0D0D1A]">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#00A3E0] mb-4" />
          <p className="text-[#8899AA] text-lg max-w-2xl">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info Items */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#111827] border border-[#2A3A4A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <div>
                    <div className="text-[#8899AA] text-sm mb-1">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#00A3E0] transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Status Badge */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-3 bg-[#22C55E]/20 border border-[#22C55E] rounded-full">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                <span className="text-[#22C55E] text-sm font-medium">
                  Actively seeking internships & junior roles in 2026
                </span>
              </div>
            </div>

            {/* Social Icon Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Vytheki-S"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-[#2A3A4A] rounded-full flex items-center justify-center hover:border-[#00A3E0] hover:bg-[#00A3E0]/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/vythekie-sathyananthan-a7b2b7245"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-[#2A3A4A] rounded-full flex items-center justify-center hover:border-[#00A3E0] hover:bg-[#00A3E0]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vytheki Sathiyananthan"
                  className="w-full bg-[#0D0D1A] border border-[#2A3A4A] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00A3E0] transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#0D0D1A] border border-[#2A3A4A] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00A3E0] transition-colors"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0D0D1A] border border-[#2A3A4A] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00A3E0] transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full bg-[#0D0D1A] border border-[#2A3A4A] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00A3E0] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00A3E0] text-white font-semibold rounded-lg px-6 py-3.5 hover:bg-[#0092c9] transition-all hover:shadow-[0_0_20px_rgba(0,163,224,0.4)] flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
