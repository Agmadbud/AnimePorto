import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 relative inline-block">
          Contact Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-anime-pink transform scale-x-100"></span>
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {/* Contact Info Cards */}
          <div className="group relative overflow-hidden">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-anime-dark via-anime-purple/5 to-anime-dark rounded-lg border border-anime-purple/20 relative z-10">
              <div className="relative">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-anime-purple relative z-10" />
                <div className="absolute inset-0 bg-anime-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base">your.email@example.com</p>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0JCODZGQyIvPjwvc3ZnPg==')] group-hover:opacity-[0.04] transition-opacity duration-500"></div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-anime-dark via-anime-pink/5 to-anime-dark rounded-lg border border-anime-pink/20 relative z-10">
              <div className="relative">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-anime-pink relative z-10" />
                <div className="absolute inset-0 bg-anime-pink/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Phone</h3>
                <p className="text-gray-400 text-sm sm:text-base">+1234567890</p>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0ZGNzlDNiIvPjwvc3ZnPg==')] group-hover:opacity-[0.04] transition-opacity duration-500"></div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-anime-dark via-anime-blue/5 to-anime-dark rounded-lg border border-anime-blue/20 relative z-10">
              <div className="relative">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-anime-blue relative z-10" />
                <div className="absolute inset-0 bg-anime-blue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Location</h3>
                <p className="text-gray-400 text-sm sm:text-base">Purbalingga</p>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzdBQTJGNyIvPjwvc3ZnPg==')] group-hover:opacity-[0.04] transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;