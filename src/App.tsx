import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgressBar from './components/ScrollProgressBar'
import ScrollIndicators from './components/ScrollIndicators'
import DecorativeElements from './components/DecorativeElements'
import SectionDivider from './components/SectionDivider'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Pre-load any necessary assets here
    const preloadAssets = async () => {
      // Simulate asset loading
      await new Promise(resolve => setTimeout(resolve, 2000));
    };

    preloadAssets();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <div 
        className="min-h-screen bg-anime-dark relative overflow-hidden"
        style={{
          display: isLoading ? 'none' : 'block'
        }}
      >
        <ScrollProgressBar />
        <ScrollIndicators />
        <DecorativeElements />

        {/* Enhanced background elements */}
        <div className="fixed inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-anime-dark via-[#2a2d4a] to-anime-dark opacity-70"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(187,134,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(187,134,252,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-anime-purple/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-tr from-anime-pink/10 to-transparent rotate-45 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-anime-blue/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tl from-anime-cyan/10 to-transparent rotate-45 blur-3xl"></div>
          </div>

          {/* Animated gradient overlays */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-anime-purple/5 via-transparent to-anime-blue/5 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-anime-pink/3 via-transparent to-anime-cyan/3 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Base Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App