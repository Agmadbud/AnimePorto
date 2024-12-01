import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [percentage, setPercentage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth percentage animation
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          // Slower at the beginning and end
          const increment = prev < 30 ? 2 : prev > 80 ? 1 : 3;
          const newPercentage = Math.min(prev + increment, 100);
          
          // When reaching 100%, trigger exit animation
          if (newPercentage === 100) {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 1000); // Wait for exit animation to complete
          }
          
          return newPercentage;
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-anime-dark z-50 flex flex-col items-center justify-center transition-all duration-1000 ${
      isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
    }`}>
      {/* Logo Animation with contained neon effect */}
      <div className={`mb-8 transform transition-transform duration-700 ${
        isExiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <h1 className="text-4xl font-normal relative">
          <span className="relative inline-block bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent animate-pulse">
            ポートフォリオ
            {/* Inner neon layers - more subtle and contained */}
            <span className="absolute inset-0 bg-gradient-to-r from-anime-purple/80 via-anime-pink/80 to-anime-blue/80 bg-clip-text text-transparent blur-[0.3px]" aria-hidden="true">
              ポートフォリオ
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-anime-purple/60 via-anime-pink/60 to-anime-blue/60 bg-clip-text text-transparent blur-[0.6px]" aria-hidden="true">
              ポートフォリオ
            </span>
          </span>
        </h1>
      </div>

      {/* Loading Container with Percentage */}
      <div className={`w-full max-w-md px-8 transform transition-all duration-700 ${
        isExiting ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="relative mb-4">
          {/* Percentage text */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-anime-purple text-sm font-medium">
            {percentage}%
          </div>
          {/* Main progress bar container */}
          <div className="h-1.5 bg-anime-dark rounded-full overflow-hidden border border-anime-purple/20">
            {/* Animated progress bar */}
            <div 
              className="h-full bg-gradient-to-r from-anime-purple/60 via-anime-pink/60 to-anime-blue/60 rounded-full transition-all duration-300 relative"
              style={{ width: `${percentage}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"></div>
            </div>
          </div>
        </div>

        {/* Loading text and Built with TypeScript */}
        <div className="mt-6 text-center space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="text-sm text-gray-400 tracking-wider font-light">
              Loading
            </span>
            <span className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-anime-purple/40 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '1s'
                  }}
                ></span>
              ))}
            </span>
          </div>
          
          {/* Built with TypeScript text */}
          <div className="flex items-center justify-center space-x-2 animate-fadeIn opacity-0" 
               style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <span className="text-xs text-gray-500">Built with</span>
            <span className="px-2 py-1 rounded-md bg-anime-purple/10 border border-anime-purple/20">
              <span className="bg-gradient-to-r from-[#007ACC] to-anime-purple bg-clip-text text-transparent text-xs font-semibold">
                TypeScript
              </span>
            </span>
          </div>

          {/* Made by Akira text */}
          <div 
            className="mt-4 animate-fadeIn opacity-0" 
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <span className="relative">
              <span className="text-sm font-medium bg-gradient-to-r from-anime-pink via-anime-purple to-anime-blue bg-clip-text text-transparent">
                Made by Akira
              </span>
              {/* Subtle underline effect */}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-anime-pink/50 via-anime-purple/50 to-anime-blue/50"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-anime-purple/2 to-transparent"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.01] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC43NSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(26,27,38,0.3)_140%)]"></div>
    </div>
  );
};

export default LoadingScreen;