// components/OpeningAnimation.jsx
import React, { useEffect, useState } from 'react';

const OpeningAnimation = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Nasconde l'animazione dopo 3 secondi e mostra l'hero
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd(); // Chiama la funzione per mostrare la homepage
    }, 3000); // Durata totale dell'animazione (in millisecondi)

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center z-50 animate-fadeOut">
      {/* Linee bianche con transizione sfumata */}
      <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white to-transparent animate-slideIn"></div>
      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-white to-transparent animate-slideIn"></div>

      {/* Logo "DF" con effetto di scrittura */}
      <div className="flex flex-col items-center space-y-4">
        <div className="text-red-500 text-6xl font-bold animate-typewriter">DF</div>
        <div className="text-white text-xl tracking-widest animate-typewriter2">BARBERSHOP</div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
