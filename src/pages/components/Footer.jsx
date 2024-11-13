// components/Footer.jsx
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#202020] text-white py-16 px-8 sm:px-12 md:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonna Sinistra: Logo e Informazioni di Contatto */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Barbercrop Logo" width={40} height={40} />
            <span
              className="ml-2 text-[24px] sm:text-[28px] md:text-[28px] font-medium leading-[28px]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'rgb(255, 255, 255)',
              }}
            >
              DF BARBERSHOP
            </span>
          </div>
          
          {/* Numero di telefono */}
          <div className="flex items-center mb-2">
            
            <span className="text-lg sm:text-xl md:text-lg font-semibold">+0683986576</span>
          </div>
          
          {/* Indirizzo */}
          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[16px] leading-[22px] mb-1">
          Via Alberto Moravia, 77, 00143 <br />
          Roma RM
          </p>
          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[16px] leading-[22px] mb-4">example@domain.com</p>
          
          {/* Icone Social */}
          <div className="flex space-x-4 text-xl text-white">
            <a href="#" aria-label="Facebook" className="hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-red-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Colonna Centrale: Newsletter */}
        <div className="flex flex-col">
          <h3
            className="font-medium text-[24px] sm:text-[28px] md:text-[28px] leading-[42px] mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: 'rgb(255, 255, 255)',
            }}
          >
            SUBSCRIBE OUR NEWSLETTER
          </h3>
          <p className="text-gray-400 text-[16px] sm:text-[18px] md:text-[22px] leading-[33px] mb-6"
             style={{
               fontFamily: "'Roboto', sans-serif",
               fontWeight: '400',
               color: 'rgb(187, 187, 187)',
             }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus interdum volutpat urna
            neque varius congue.
          </p>
          
          {/* Form di iscrizione alla Newsletter */}
          <div className="flex flex-col sm:flex-row md:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto md:w-auto px-4 py-2 text-black text-[14px] placeholder-gray-500 mb-4 sm:mb-0 md:mb-0"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold text-[14px]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-12 text-center text-gray-400 text-[14px]">
        © Daniele Fichera BarberShop <br />
        All rights reserved
      </div>
    </footer>
  );
}
