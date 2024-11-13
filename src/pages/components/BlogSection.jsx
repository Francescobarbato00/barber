// components/BlogSection.jsx
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Effetto di entrata per il titolo
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#202020] text-white py-16 px-8 sm:px-12 md:px-20">
      <div className="container mx-auto">
        
        {/* Titolo della sezione con testo di sfondo */}
        <div className="relative mb-12">
          <h2
            className="font-medium text-3xl sm:text-4xl md:text-[40px] leading-[52px] mb-4 relative z-10"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: 'rgb(255, 255, 255)',
            }}
          >
            OUR BLOG
          </h2>
          
          {/* Testo di sfondo "SERVICE" */}
          <h1
            className="absolute top-0 left-0 text-[80px] sm:text-[100px] md:text-[90px] font-bold text-gray-700 opacity-10"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            RECENT POST
          </h1>
        </div>

        {/* Griglia dei post del blog */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Post del blog 1 */}
          <div className="flex flex-col">
            <Image src="/work1.jpg" alt="Blog Post 1" width={400} height={300} className="rounded-lg" />
            <h3
              className="font-medium text-xl sm:text-2xl md:text-[24px] leading-[32px] mt-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              5 ADVANTAGES WHY YOU SHOULD VISIT BARBERSHOP
            </h3>
            <p
              className="text-red-500 mt-2 text-sm sm:text-lg md:text-[18px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: '400',
              }}
            >
              May 18, 2022
            </p>
          </div>

          {/* Post del blog 2 */}
          <div className="flex flex-col">
            <Image src="/work2.jpg" alt="Blog Post 2" width={400} height={300} className="rounded-lg" />
            <h3
              className="font-medium text-xl sm:text-2xl md:text-[24px] leading-[32px] mt-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              TOP 10 POPULAR COSMETICS FOR HAIR STYLING
            </h3>
            <p
              className="text-red-500 mt-2 text-sm sm:text-lg md:text-[18px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: '400',
              }}
            >
              May 19, 2022
            </p>
          </div>

          {/* Post del blog 3 */}
          <div className="flex flex-col">
            <Image src="/work3.jpg" alt="Blog Post 3" width={400} height={300} className="rounded-lg" />
            <h3
              className="font-medium text-xl sm:text-2xl md:text-[24px] leading-[32px] mt-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              BASIC RULES FOR THE CARE OF A BEARD AND MUSTACHE
            </h3>
            <p
              className="text-red-500 mt-2 text-sm sm:text-lg md:text-[18px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: '400',
              }}
            >
              May 23, 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
