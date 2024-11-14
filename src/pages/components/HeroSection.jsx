// components/HeroSection.jsx
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/hero02.png',
  '/hero06.jpg',
  '/hero04.jpg',
  '/hero05.jpg',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Funzione per passare alla prossima immagine
    const switchImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Imposta un timeout per cambiare immagine ogni 3 secondi
    const timeout = setTimeout(switchImage, 3000);

    // Cancella il timeout quando il componente si smonta
    return () => clearTimeout(timeout);
  }, [currentImageIndex]); // Assicurati che il timeout dipenda dall'indice corrente

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider di immagini di sfondo */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Hero Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Da priorità alla prima immagine per il caricamento
          />
        </div>
      ))}

      {/* Overlay scuro per il contrasto del testo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto della Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12 md:px-20 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fadeInDown">
          L'ARTE DEL TAGLIO <br /> E DELLO STILE
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-2 animate-fadeIn delay-500">
          Via Alberto Moravia, 77, 00143 <br />
          Roma RM
        </p>

        <div className="flex items-center text-base sm:text-lg md:text-xl font-semibold animate-fadeInUp delay-700">
          <span className="mr-2">
            +0683986576
          </span>
        </div>
      </div>
    </div>
  );
}
