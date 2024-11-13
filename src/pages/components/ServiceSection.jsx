// components/ServiceSection.jsx
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="relative bg-[#202020] text-white py-16 px-8 sm:px-12 md:px-20">
      <div className="container mx-auto text-center">
        
        {/* Titolo della sezione con testo di sfondo */}
        <div className="relative mb-12 animate-fadeInDown">
          <h2
            className="font-medium text-3xl sm:text-4xl md:text-[40px] leading-[52px] mb-4 relative z-10"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: 'rgb(255, 255, 255)',
            }}
          >
            WHAT WE PROVIDE
          </h2>
          <p
            className="text-lg sm:text-xl md:text-[22px] leading-[33px] text-gray-400 mb-4 relative z-10 animate-fadeIn delay-500"
            style={{
              fontFamily: "'Roboto', sans-serif",
              color: 'rgb(187, 187, 187)',
            }}
          >
            Penatibus fusce consequat donec vitae prittitor elementum.
          </p>
          {/* Testo di sfondo "SERVICE" */}
          <h1
            className="absolute inset-0 flex items-center justify-center text-[80px] sm:text-[120px] md:text-[160px] font-bold text-gray-700 opacity-10"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            SERVICE
          </h1>
        </div>

        {/* Griglia dei servizi con immagine centrale */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Colonna di sinistra */}
          <div className="flex flex-col space-y-8 animate-fadeInUp">
            {/* Servizio: Haircut */}
            <div className="flex flex-col items-center text-left animate-fadeInUp delay-700">
              <div className="text-red-500 mb-4">
                <Image src="/1.png" alt="Haircut Icon" width={50} height={50} />
              </div>
              <h3
                className="font-medium text-xl sm:text-2xl md:text-[28px] leading-[42px]"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                HAIRCUT
              </h3>
              <p
                className="text-gray-400 mt-2 mb-4 text-sm sm:text-lg md:text-[22px] leading-[33px]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus
                ultrices volutpat quisque.
              </p>
              <span className="text-red-500 font-bold">FROM $40</span>
            </div>

            {/* Servizio: Moustache */}
            <div className="flex flex-col items-center text-left animate-fadeInUp delay-900">
              <div className="text-red-500 mb-4">
                <Image src="/3.png" alt="Moustache Icon" width={50} height={50} />
              </div>
              <h3
                className="font-medium text-xl sm:text-2xl md:text-[28px] leading-[42px]"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                MOUSTACHE
              </h3>
              <p
                className="text-gray-400 mt-2 mb-4 text-sm sm:text-lg md:text-[22px] leading-[33px]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                Viverra duis ut orci mi id. Eget ultricies facilisi elementum nec vel a gravida
                facilisis in. Tellus felis sapien adipiscing.
              </p>
              <span className="text-red-500 font-bold">FROM $40</span>
            </div>
          </div>

          {/* Immagine centrale */}
          <div className="flex justify-center items-center animate-fadeIn delay-1200">
            <Image
              src="/1.jpg" // Assicurati di avere l'immagine nella cartella /public
              alt="Barber tools"
              width={350}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Colonna di destra */}
          <div className="flex flex-col space-y-8 animate-fadeInRight delay-1500">
            {/* Servizio: Shave */}
            <div className="flex flex-col items-center text-left animate-fadeInUp delay-1100">
              <div className="text-red-500 mb-4">
                <Image src="/2.png" alt="Shave Icon" width={50} height={50} />
              </div>
              <h3
                className="font-medium text-xl sm:text-2xl md:text-[28px] leading-[42px]"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                SHAVE
              </h3>
              <p
                className="text-gray-400 mt-2 mb-4 text-sm sm:text-lg md:text-[22px] leading-[33px]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                Lorem velit parturient consectetur cursus tincidunt tristique pretium volutpat urna.
                Vitae scelerisque quam eget.
              </p>
              <span className="text-red-500 font-bold">FROM $40</span>
            </div>

            {/* Servizio: Stacking */}
            <div className="flex flex-col items-center text-left animate-fadeInUp delay-1300">
              <div className="text-red-500 mb-4">
                <Image src="/4.png" alt="Stacking Icon" width={50} height={50} />
              </div>
              <h3
                className="font-medium text-xl sm:text-2xl md:text-[28px] leading-[42px]"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                STACKING
              </h3>
              <p
                className="text-gray-400 mt-2 mb-4 text-sm sm:text-lg md:text-[22px] leading-[33px]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                Dapibus ac mattis semper hendrerit eu dolor aliquam. Vitae sem orci non diam.
                Venenatis augue arcu mauris id eros.
              </p>
              <span className="text-red-500 font-bold">FROM $40</span>
            </div>
          </div>
        </div>

        {/* Pulsante "View Services" con effetto di entrata */}
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 font-semibold mx-auto animate-fadeIn delay-1600">
          VIEW SERVICES
        </button>
      </div>
    </section>
  );
}
