// components/OpeningHoursSection.jsx
export default function OpeningHoursSection() {
    return (
      <section className="relative bg-black text-white py-16 px-8 sm:px-12 md:px-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/shop.jpg')" }}></div>
        <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Colonna di sinistra: Testo e pulsante */}
          <div className="space-y-6">
            <h2
              className="font-medium text-3xl sm:text-4xl md:text-[40px] leading-[52px] mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              TEAM OF PROFESSIONALS <br /> IS WAITING FOR YOU
            </h2>
            <p
              className="text-lg sm:text-xl md:text-[22px] leading-[33px] text-gray-300"
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: 'rgb(187, 187, 187)',
              }}
            >
              Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat donec
              vitae porttitor elementum volutpat gravida. Tellus hac tristique nisi, id amet cras tempor, amet.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 font-semibold">
              BOOK NOW
            </button>
          </div>
  
          {/* Colonna di destra: Orari di apertura */}
          <div>
            <h3
              className="font-medium text-xl sm:text-2xl md:text-[28px] leading-[42px] mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              SPECIAL OPENING HOURS
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>MONDAY:</span>
                <span className="text-gray-300">9:00 am – 7:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>TUESDAY:</span>
                <span className="text-gray-300">9:00 am – 7:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>WEDNESDAY:</span>
                <span className="text-gray-300">9:00 am – 7:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>THURSDAY:</span>
                <span className="text-gray-300">9:00 am – 7:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>FRIDAY:</span>
                <span className="text-gray-300">9:00 am – 7:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold" style={{ fontFamily: "'Oswald', sans-serif" }}>SAT/SUN:</span>
                <span className="text-gray-300">CLOSED</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  