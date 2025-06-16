import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen max-h-[800px] min-h-[600px] bg-gradient-to-r from-coffee-900 to-coffee-700">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        }}
      >
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-cream-50 max-w-2xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight">
            Café Premium de Chile
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cream-100 max-w-3xl">
            Descubre los sabores únicos de nuestras regiones, desde la Araucanía hasta Valparaíso
          </p>
          <a 
            href="#productos"
            className="inline-block bg-cream-400 text-coffee-900 px-10 py-4 text-lg rounded-xl font-semibold hover:bg-cream-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Explorar Productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;