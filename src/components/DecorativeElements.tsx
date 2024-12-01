const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(187,134,252,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(187,134,252,0.03)_1.5px,transparent_1.5px)] bg-[size:25px_25px]"></div>
      
      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-anime-purple/20 rounded-tl-xl animate-pulse-slow"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-anime-pink/20 rounded-tr-xl animate-pulse-slow"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-anime-blue/20 rounded-bl-xl animate-pulse-slow"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-anime-cyan/20 rounded-br-xl animate-pulse-slow"></div>
      </div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-[1px] bg-gradient-to-r from-transparent via-anime-purple/10 to-transparent transform rotate-45"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-[1px] bg-gradient-to-r from-transparent via-anime-pink/10 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-[1px] bg-gradient-to-r from-transparent via-anime-blue/10 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-[1px] bg-gradient-to-r from-transparent via-anime-cyan/10 to-transparent transform rotate-45"></div>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-anime-purple/20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-anime-pink/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-anime-blue/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-anime-cyan/20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-anime-purple/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-anime-pink/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default DecorativeElements;