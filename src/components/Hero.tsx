import { Sparkles, Github } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [greeting, setGreeting] = useState('おはよう');
  
  const greetings = [
    { text: 'おはよう', meaning: 'Good Morning' },
    { text: 'こんにちは', meaning: 'Good Afternoon' },
    { text: 'こんばんは', meaning: 'Good Evening' },
    { text: 'よろしく', meaning: 'Nice to meet you' },
    { text: 'はじめまして', meaning: 'How do you do' }
  ];

  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Code Artisan'
  ];

  const handleGreetingHover = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting.text);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-anime-purple/5 to-transparent animate-pulse-slow"></div>
      <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
        <div className="mb-6 animate-float">
          <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-anime-purple/80 mx-auto animate-rotate-slow" />
        </div>
        
        {/* Enhanced Greeting Section */}
        <div className="relative mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white animate-slide-down inline-flex items-center gap-4">
            <span 
              className="text-anime-purple/90 hover:text-anime-pink/90 transition-all duration-300 cursor-help relative group"
              onMouseEnter={handleGreetingHover}
            >
              {greeting}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-anime-dark/90 text-anime-purple text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {greetings.find(g => g.text === greeting)?.meaning}
              </span>
            </span>
            I'm
          </h1>
        </div>

        {/* Enhanced Name Section */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 relative group">
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent animate-pulse-slow">
              Akira
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
          </span>
        </h2>

        {/* Animated Roles */}
        <div className="h-8 sm:h-10 mb-8 overflow-hidden">
          {roles.map((role, index) => (
            <p
              key={role}
              className="text-lg sm:text-xl text-gray-400 animate-slide-up"
              style={{
                animationDelay: `${index * 3}s`,
                animationDuration: `${roles.length * 3}s`,
                animationIterationCount: 'infinite'
              }}
            >
              {role}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-anime-purple/70 rounded-full shadow-sm text-anime-purple hover:text-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-anime-purple/90 group-hover:translate-x-0 ease">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-anime-purple/90 transition-all duration-300 transform group-hover:translate-x-full ease">Get In Touch</span>
            <span className="relative invisible">Get In Touch</span>
          </a>
          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-anime-pink/70 rounded-full shadow-sm text-anime-pink hover:text-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-anime-pink/90 group-hover:translate-x-0 ease">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-anime-pink/90 transition-all duration-300 transform group-hover:translate-x-full ease">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span className="relative invisible">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;