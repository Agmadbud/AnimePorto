import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project Two',
      description: 'Mobile-first e-commerce platform with real-time updates',
      tech: ['Next.js', 'TypeScript', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project Three',
      description: 'Real-time chat application with video calling features',
      tech: ['React', 'WebRTC', 'Socket.io'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 flex items-center gap-3 animate-slide-left">
          Projects
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-anime-purple/70 animate-pulse-slow" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-anime-dark via-anime-purple/5 to-anime-dark rounded-lg overflow-hidden border border-anime-purple/10 hover:border-anime-purple/30 transition-all duration-500 hover:shadow-[0_0_15px_rgba(187,134,252,0.15)] animate-scale"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0JCODZGQyIvPjwvc3ZnPg==')] group-hover:opacity-[0.05] transition-opacity duration-500"></div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/0 via-anime-pink/0 to-anime-blue/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-anime-purple/30 to-transparent transform origin-top"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-anime-purple/30 to-transparent transform origin-left"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-anime-purple/30 to-transparent transform origin-bottom"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-anime-purple/30 to-transparent transform origin-right"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-anime-purple/90 transition-colors">
                  {project.title}
                  <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-anime-purple/50 to-transparent transition-all duration-500"></div>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="relative bg-anime-purple/5 text-anime-purple/90 px-3 py-1 rounded-full text-xs sm:text-sm border border-anime-purple/10 animate-float overflow-hidden group-hover:border-anime-purple/20"
                      style={{
                        animationDelay: `${idx * 200}ms`
                      }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="relative text-gray-400 hover:text-anime-purple/90 transition-colors transform hover:scale-110 p-2 group"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow relative z-10" />
                    <div className="absolute inset-0 bg-anime-purple/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </a>
                  <a 
                    href={project.live} 
                    className="relative text-gray-400 hover:text-anime-pink/90 transition-colors transform hover:scale-110 p-2 group"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-slow relative z-10" />
                    <div className="absolute inset-0 bg-anime-pink/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;