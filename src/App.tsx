import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  const handleBackToCart = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-50">
        <Header onCartClick={handleCartClick} />
        <Hero />
        <ProductCatalog />
        <Footer />
        
        <Cart
          isOpen={isCartOpen}
          onClose={handleCartClose}
          onCheckout={handleCheckout}
        />
        
        <Checkout
          isOpen={isCheckoutOpen}
          onClose={handleCheckoutClose}
          onBack={handleBackToCart}
        />
      </div>
    </CartProvider>
  );
}

export default App;