// components/AboutSection.jsx
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Effetto per far apparire la scritta "BARBERCROP" da sinistra
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#202020] text-white py-16 px-6 sm:px-12 md:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Titolo principale */}
        <div>
          <h2
            className="font-medium mb-2 text-3xl sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "'Oswald', sans-serif",
              lineHeight: '52px',
              color: 'rgb(255, 255, 255)',
            }}
          >
            PROFESSIONAL BARBERCROP <br /> FOR MEN ONLY
          </h2>
          <div
            className={`text-[48px] sm:text-[56px] md:text-[64px] font-bold mt-4 transition-transform duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{
              color: 'rgba(255, 255, 255, 0.1)',
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            BARBERCROP
          </div>
        </div>

        {/* Descrizione */}
        <div>
          <p
            className="mb-8 text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: '400',
              lineHeight: '33px',
              color: 'rgb(187, 187, 187)',
            }}
          >
            Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque. Vitae nunc,
            dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar cursus pretium sit
            pretium.
          </p>

          {/* Informazioni aggiuntive */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3
                className="font-medium mb-2 text-xl sm:text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                SINCE 2015
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis cras odio.
              </p>
            </div>
            <div>
              <h3
                className="font-medium mb-2 text-xl sm:text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'rgb(255, 255, 255)',
                }}
              >
                1000+ CLIENTS
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '400',
                  color: 'rgb(187, 187, 187)',
                }}
              >
                Metus varius vitae habitant lorem. Porta scelerisque facilisi.
              </p>
            </div>
          </div>

          {/* Pulsante */}
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
