import React from "react";
import { Plus } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-cream-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-coffee-900">
            {product.name}
          </h3>
          <span className="text-sm bg-coffee-200 text-coffee-800 px-2 py-1 rounded">
            {product.region}
          </span>
        </div>

        <p className="text-coffee-700 text-base mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-coffee-600">
            <span className="font-medium">Tostado:</span> {product.roastLevel}
          </div>
          <div className="text-sm text-coffee-600">
            <span className="font-medium">Peso:</span> {product.weight}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-coffee-900">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-coffee-700 hover:bg-coffee-600 text-cream-50 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span className="text-lg">Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
