// pages/index.js
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import OpeningHoursSection from './components/OpeningHoursSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import OpeningAnimation from './components/OpeningAnimation';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };

  return (
    <div>
      {showAnimation ? (
        <OpeningAnimation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <OpeningHoursSection />
          <BlogSection />
          <Footer />
        </>
      )}
    </div>
  );
}
