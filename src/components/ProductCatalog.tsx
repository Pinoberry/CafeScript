import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, regions } from '../data/products';

const ProductCatalog: React.FC = () => {
  // Efecto para el smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  const [selectedRegion, setSelectedRegion] = useState('Todas las Regiones');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = selectedRegion === 'Todas las Regiones'
    ? products
    : products.filter(product => product.region === selectedRegion);

  return (
    <section id="productos" className="py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-900 font-serif mb-6">
            Nuestros Cafés Premium
          </h2>
          <p className="text-coffee-700 text-xl max-w-3xl mx-auto mb-12">
            Cada región de Chile aporta características únicas a nuestros granos de café
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 bg-coffee-700 text-cream-50 px-4 py-2 rounded-lg mb-4"
            >
              <Filter className="h-4 w-4" />
              <span>Filtrar por Región</span>
            </button>

            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedRegion === region
                        ? 'bg-coffee-700 text-cream-50'
                        : 'bg-coffee-200 text-coffee-800 hover:bg-coffee-300'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-coffee-600 text-lg">
              No se encontraron productos para la región seleccionada.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;