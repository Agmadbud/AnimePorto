import { Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
          About Me
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-anime-purple animate-pulse" />
        </h2>
        <div className="max-w-2xl relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-anime-purple/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-anime-pink/10 rounded-full blur-xl"></div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed bg-gradient-to-r from-anime-dark to-anime-purple/10 p-4 sm:p-6 rounded-lg border border-anime-purple/20 relative z-10">
            I'm a passionate developer with expertise in building modern web applications. 
            I specialize in creating responsive, user-friendly interfaces using cutting-edge technologies.
            With a strong foundation in both front-end and back-end development, 
            I bring ideas to life through clean, efficient code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;