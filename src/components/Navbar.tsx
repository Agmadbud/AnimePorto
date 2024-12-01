import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      {/* Frosted glass background */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-anime-dark/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0JCODZGQyIvPjwvc3ZnPg==')]"></div>
        
        {/* Gradient bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-anime-purple/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="relative group cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent transition-colors duration-300">
                アキラ
              </span>
              <Sparkles className="absolute -top-1 -right-4 w-4 h-4 text-anime-purple opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-spin-slow" />
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-anime-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative group"
              >
                <span className="text-gray-300 hover:text-anime-purple transition-colors duration-300 text-sm uppercase tracking-wider font-medium cursor-pointer">
                  {item}
                </span>
                
                {/* Hover effect line */}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-anime-purple/50 via-anime-pink/50 to-anime-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                
                {/* Active indicator */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-anime-purple/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-anime-purple/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-anime-purple transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-anime-purple transform transition-all duration-300 ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            {/* Background overlay with frosted glass effect */}
            <div className="absolute inset-0 bg-anime-dark/95 backdrop-blur-lg">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0JCODZGQyIvPjwvc3ZnPg==')]"></div>
            </div>

            {/* Menu items */}
            <div className="relative h-full flex flex-col items-center justify-center px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className={`relative group py-4 transform transition-all duration-500 ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <span className="text-2xl font-medium text-gray-300 hover:text-anime-purple transition-colors duration-300 capitalize">
                    {item}
                  </span>
                  
                  {/* Hover line effect */}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-anime-purple/50 via-anime-pink/50 to-anime-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;