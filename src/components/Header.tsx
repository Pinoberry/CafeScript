import React from "react";
import { ShoppingCart, Coffee } from "lucide-react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-coffee-900 text-cream-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-cream-200" />
            <h1 className="text-2xl font-bold font-serif">CafeScript</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#inicio"
              className="hover:text-cream-200 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="hover:text-cream-200 transition-colors"
            >
              Productos
            </a>
            <a
              href="#nosotros"
              className="hover:text-cream-200 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="hover:text-cream-200 transition-colors"
            >
              Contacto
            </a>
          </nav>

          <button
            onClick={onCartClick}
            className="relative bg-coffee-700 hover:bg-coffee-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Carrito</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-cream-400 text-coffee-900 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
