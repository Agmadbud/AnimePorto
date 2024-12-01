import { Code2, Database, Layout, Server, Laptop, Globe, Shield, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-anime-purple" />,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Angular']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8 text-anime-pink" />,
      items: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot', 'Django']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-anime-blue" />,
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'Cassandra']
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-anime-cyan" />,
      items: ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust']
    },
    {
      title: 'DevOps',
      icon: <Laptop className="w-6 h-6 sm:w-8 sm:h-8 text-anime-purple" />,
      items: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'GitHub Actions', 'Terraform']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-anime-pink" />,
      items: ['HTML5', 'CSS3', 'REST API', 'GraphQL', 'WebSockets', 'Progressive Web Apps']
    },
    {
      title: 'Security',
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-anime-blue" />,
      items: ['OAuth', 'JWT', 'HTTPS', 'Encryption', 'Security Best Practices']
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-anime-cyan" />,
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing']
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 relative inline-block animate-slide-right">
          Skills & Expertise
          <span className="absolute bottom-0 left-0 w-full h-1 bg-anime-purple transform scale-x-100"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-anime-dark via-anime-purple/5 to-anime-dark p-6 rounded-lg border border-anime-purple/20 hover:border-anime-purple/40 transition-all duration-500 hover:transform hover:-translate-y-2 animate-scale overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDMwbTAgMmEyIDIgMCAwIDEtMi0ybTItMmEyIDIgMCAwIDEgMiAyIiBzdHJva2U9IiNCQjg2RkMiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] group-hover:opacity-[0.04] transition-opacity duration-500"></div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-anime-purple/30 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-anime-purple/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-anime-purple/30 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-anime-purple/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="transform group-hover:rotate-12 transition-transform duration-300 animate-float relative">
                    {skill.icon}
                    <div className="absolute inset-0 bg-anime-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white ml-3 relative">
                    {skill.title}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-anime-purple/50 to-transparent group-hover:w-full transition-all duration-500"></div>
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="text-sm sm:text-base text-gray-400 hover:text-anime-purple transition-colors flex items-center gap-2 group/item"
                      style={{
                        animation: 'slideRight 0.5s ease-out forwards',
                        animationDelay: `${(index * 100) + (idx * 50)}ms`,
                        opacity: 0
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-anime-purple/50 rounded-full group-hover/item:scale-125 transition-transform duration-300"></span>
                      <span className="relative">
                        {item}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-anime-purple/0 via-transparent to-anime-pink/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;