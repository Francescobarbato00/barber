// components/HeroSection.jsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video di sfondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/dfvideo.mp4"
        type="video/mp4"
      ></video>

      {/* Overlay scuro per il contrasto del testo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto della Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12 md:px-20 text-white">
        {/* Testo principale con effetto di entrata dall'alto */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fadeInDown">
        L'ARTE DEL TAGLIO <br /> E DELLO STILE
        </h1>

        {/* Indirizzo con effetto di dissolvenza */}
        <p className="text-base sm:text-lg md:text-xl mb-2 animate-fadeIn delay-500">
          Via Alberto Moravia, 77, 00143 <br />
          Roma RM
        </p>

        {/* Telefono con effetto di entrata dal basso */}
        <div className="flex items-center text-base sm:text-lg md:text-xl font-semibold animate-fadeInUp delay-700">
          <span className="mr-2">
            {/* Icona telefono moderna simile a quella che hai caricato */}
            +0683986576
          </span>
        </div>
      </div>
    </div>
  );
}
