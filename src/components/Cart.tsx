import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { state, dispatch } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-cream-50 w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b border-coffee-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-coffee-900">
              Carrito de Compras
            </h2>
            <button
              onClick={onClose}
              className="text-coffee-600 hover:text-coffee-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-coffee-600">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-coffee-900 text-sm">
                          {item.name}
                        </h3>
                        <p className="text-coffee-600 text-xs">{item.region}</p>
                        <p className="text-coffee-800 font-bold">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-coffee-400 hover:text-coffee-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-coffee-200 hover:bg-coffee-300 text-coffee-800 w-8 h-8 rounded flex items-center justify-center"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="text-coffee-900 font-semibold w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-coffee-200 hover:bg-coffee-300 text-coffee-800 w-8 h-8 rounded flex items-center justify-center"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-coffee-900 font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-coffee-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-coffee-900">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-coffee-900">
                    {formatPrice(state.total)}
                  </span>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-coffee-700 hover:bg-coffee-600 text-cream-50 py-3 rounded-lg font-semibold transition-colors"
                >
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
