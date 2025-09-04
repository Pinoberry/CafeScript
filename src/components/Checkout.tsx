import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { Customer } from "../types";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, onBack }) => {
  const { state, dispatch } = useCart();
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOrderComplete(true);
    setIsSubmitting(false);
    dispatch({ type: "CLEAR_CART" });
  };

  const handleNewOrder = () => {
    setOrderComplete(false);
    setCustomer({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      region: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-8">
      <div className="bg-cream-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg mx-4">
        <div className="p-4 border-b border-coffee-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={onBack}
                className="text-coffee-600 hover:text-coffee-800"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h2 className="text-xl font-bold text-coffee-900">
                {orderComplete ? "Pedido Confirmado" : "Finalizar Compra"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-coffee-600 hover:text-coffee-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {orderComplete ? (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-coffee-900 mb-2">
                  ¡Pedido Confirmado!
                </h3>
                <p className="text-coffee-700">
                  Gracias por tu compra. Recibirás un email de confirmación en
                  breve.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-coffee-900 mb-2">
                  Detalles del pedido:
                </h4>
                <p className="text-coffee-700 text-sm">
                  <strong>Cliente:</strong> {customer.name}
                  <br />
                  <strong>Email:</strong> {customer.email}
                  <br />
                  <strong>Dirección:</strong> {customer.address},{" "}
                  {customer.city}
                </p>
              </div>

              <button
                onClick={handleNewOrder}
                className="bg-coffee-700 hover:bg-coffee-600 text-cream-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Realizar Nuevo Pedido
              </button>
            </div>
          ) : (
            <>
              {/* Resumen del pedido */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-coffee-900 mb-3">
                  Resumen del Pedido
                </h3>
                <div className="space-y-2">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-coffee-700">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="text-coffee-900 font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-coffee-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span className="text-coffee-900">Total:</span>
                      <span className="text-coffee-900">
                        {formatPrice(state.total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de datos del cliente */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customer.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customer.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customer.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Región *
                    </label>
                    <select
                      name="region"
                      value={customer.region}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    >
                      <option value="">Seleccionar región</option>
                      <option value="Valparaíso">Valparaíso</option>
                      <option value="Santiago">Santiago</option>
                      <option value="Maule">Maule</option>
                      <option value="Biobío">Biobío</option>
                      <option value="La Araucanía">La Araucanía</option>
                      <option value="Los Lagos">Los Lagos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={customer.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-coffee-900 mb-1">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={customer.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coffee-700 hover:bg-coffee-600 disabled:bg-coffee-400 text-cream-50 py-3 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting
                    ? "Procesando..."
                    : `Confirmar Pedido - ${formatPrice(state.total)}`}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
