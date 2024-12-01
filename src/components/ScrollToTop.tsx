import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll visibility and progress with debouncing
  useEffect(() => {
    let timeoutId: number;
    
    const toggleVisibility = () => {
      clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
        // Calculate scroll progress percentage
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        setScrollProgress(scrolled);

        if (winScroll > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 10); // Smaller delay for smoother updates
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div 
      className={`fixed z-50 transition-all duration-500 ease-in-out transform
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-90'}`}
      style={{
        right: '2rem',
        bottom: '2rem',
      }}
    >
      <button
        onClick={scrollToTop}
        className="relative group"
        aria-label="Scroll to top"
      >
        {/* Circular progress indicator */}
        <svg 
          className="w-12 h-12 transform rotate-[-90deg]"
          viewBox="0 0 44 44"
        >
          {/* Background circle */}
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="rgba(187, 134, 252, 0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="rgba(187, 134, 252, 0.5)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-200"
          />
        </svg>

        {/* Button content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative bg-anime-dark/90 rounded-full p-2.5 border border-anime-purple/20 group-hover:border-anime-purple/40 transition-all duration-300">
            {/* Main icon */}
            <ArrowUp className="w-5 h-5 text-anime-purple transition-transform duration-300 
                             group-hover:-translate-y-0.5 group-hover:scale-110" />
            
            {/* Echo effect */}
            <ArrowUp className="absolute inset-0 w-5 h-5 m-2.5 text-anime-purple/50 
                             transition-all duration-300 
                             group-hover:translate-y-0.5 group-hover:opacity-0" />
          </div>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-full bg-anime-purple/5 animate-ping"></div>
        </div>

        {/* Percentage tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                       bg-anime-dark/90 text-anime-purple text-xs py-1 px-2 rounded
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       border border-anime-purple/20">
          {Math.round(scrollProgress)}%
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;