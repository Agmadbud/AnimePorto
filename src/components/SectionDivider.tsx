interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = '' }: SectionDividerProps) => {
  return (
    <div className={`w-full h-px relative my-8 ${className}`}>
      {/* Main gradient line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-anime-purple/20 to-transparent"></div>
      
      {/* Decorative center element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8">
        <div className="absolute inset-0 bg-anime-dark border border-anime-purple/20 transform rotate-45"></div>
        <div className="absolute inset-2 bg-anime-dark border border-anime-purple/40 transform rotate-45 animate-spin-slow"></div>
      </div>
      
      {/* Side dots */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2 h-2 bg-anime-purple/30 rounded-full animate-pulse"></div>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-2 h-2 bg-anime-purple/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default SectionDivider;