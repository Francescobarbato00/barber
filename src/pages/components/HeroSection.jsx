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
    const switchImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const timeout = setTimeout(switchImage, 3000);
    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

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
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay scuro per il contrasto del testo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto della Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12 md:px-20 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-center sm:text-left animate-fadeInDown">
          L'ARTE DEL TAGLIO <br /> E DELLO STILE
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 text-center sm:text-left animate-fadeIn delay-500">
          Via Alberto Moravia, 77, 00143 <br />
          Roma RM
        </p>

        <div className="flex items-center justify-center sm:justify-start text-sm sm:text-base md:text-lg lg:text-xl font-semibold animate-fadeInUp delay-700">
          <span className="mr-2">+0683986576</span>
        </div>
      </div>
    </div>
  );
}
