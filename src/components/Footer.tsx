import React from 'react';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-cream-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-cream-200" />
              <h3 className="text-2xl font-bold font-serif">CafeScript</h3>
            </div>
            <p className="text-cream-200 mb-4">
              Café premium de Chile, cultivado en las mejores regiones del país. 
              Desde 2020 llevando el sabor auténtico de nuestras tierras a tu hogar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-cream-200 hover:text-cream-100 transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-cream-200 hover:text-cream-100 transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="text-cream-200 hover:text-cream-100 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-cream-200 hover:text-cream-100 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200 text-sm">Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200 text-sm">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200 text-sm">hola@cafescript.cl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-8 text-center">
          <p className="text-cream-300 text-sm">
            © 2024 CafeScript. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;