import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-r from-transparent to-white/20 animate-shine"></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;