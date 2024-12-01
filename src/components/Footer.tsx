import { Link } from 'react-scroll';
import { Github, Instagram, MessagesSquare, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-anime-dark/50 pt-16 pb-8">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-anime-purple/20 to-transparent"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0JCODZGQyIvPjwvc3ZnPg==')] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent">
                ポートフォリオ
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences with passion and precision. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-anime-purple transition-colors duration-300 text-sm capitalize cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-anime-purple transition-colors duration-300 text-sm group"
                >
                  <Mail className="w-4 h-4 group-hover:animate-bounce" />
                  <span>your.email@example.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Purbalingga, Indonesia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-2 bg-anime-purple/5 rounded-lg border border-anime-purple/10 hover:border-anime-purple/30 transition-colors duration-300">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-anime-purple transition-colors duration-300" />
                </div>
              </a>
              <a 
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-2 bg-anime-pink/5 rounded-lg border border-anime-pink/10 hover:border-anime-pink/30 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-anime-pink transition-colors duration-300" />
                </div>
              </a>
              <a 
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-2 bg-anime-blue/5 rounded-lg border border-anime-blue/10 hover:border-anime-blue/30 transition-colors duration-300">
                  <MessagesSquare className="w-5 h-5 text-gray-400 group-hover:text-anime-blue transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-anime-purple/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Akira. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-anime-pink animate-pulse" />
              <span>by</span>
              <span className="text-anime-purple">Akira</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-anime-purple/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;