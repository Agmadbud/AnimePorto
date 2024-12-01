import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const ScrollIndicators = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          if (pageYOffset >= offsetTop) {
            newActiveSection = section;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="group cursor-pointer"
          >
            <div className="relative flex items-center">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${activeSection === section 
                    ? 'bg-anime-purple scale-125' 
                    : 'bg-anime-purple/30 hover:bg-anime-purple/50'
                  }`}
              >
                <div className="absolute inset-0 rounded-full bg-anime-purple/30 group-hover:animate-ping"></div>
              </div>
              <span
                className={`ml-4 text-sm capitalize transition-all duration-300 absolute left-full pl-2
                  ${activeSection === section
                    ? 'opacity-100 translate-x-0 text-anime-purple'
                    : 'opacity-0 -translate-x-2 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
              >
                {section}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicators;