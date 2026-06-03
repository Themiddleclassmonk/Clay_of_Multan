import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setDrawerOpen, removeItem, updateQuantity, subtotal } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[80] transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8DFD0]">
          <h2 className="font-display text-2xl font-medium text-[#4A3728]">
            Your Cart
          </h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-[#4A3728] hover:text-[#C4956A] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6" style={{ height: 'calc(100% - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-[#F5F1E8] flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8B7355"
                  strokeWidth="1.5"
                >
                  <path d="M6 6h15l-1.5 9h-12z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                  <path d="M6 6L5 3H2" />
                </svg>
              </div>
              <p className="font-display text-xl text-[#4A3728]">
                Your cart is empty
              </p>
              <p className="text-sm text-[#8B7355] mt-2">
                Add some natural goodness to your cart
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg bg-[#F5F1E8] overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-sm font-medium text-[#4A3728] truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#8B7355] mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border border-[#D4C5A9] flex items-center justify-center text-[#4A3728] hover:bg-[#F5F1E8] transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium text-[#4A3728] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border border-[#D4C5A9] flex items-center justify-center text-[#4A3728] hover:bg-[#F5F1E8] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[#8B7355] hover:text-[#C4956A] underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#E8DFD0] bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-[#8B7355]">Subtotal</span>
              <span className="font-body text-lg font-semibold text-[#4A3728]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full py-3.5 bg-[#4A3728] text-white font-medium text-sm rounded-lg transition-all duration-300 hover:bg-[#C4956A]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
