import { Trash2 } from "lucide-react";
import { useCart } from "../Context/CartContext";
import OrderSummary from "../Components/OrderSummary";

const Cart = () => {
  const { removeFromCart, cartItems, incrementQuantity, decrementQuantity,cartNumber } =
    useCart();

  return (
    <>
      <div className="px-5 min-h-screen grid grid-cols-1 gap-5 min-[900px]:grid-cols-[1.7fr_1fr] mt-5">
        <div className="flex flex-col gap-5 w-full">
          {cartItems.map((car) => (
            <div
              key={car.car.id}
              className="flex gap-4 border border-gray-200 rounded-md p-3 w-full bg-white"
            >
              {/* CAR IMAGE */}
              <img
                className="w-32 h-28 rounded-md object-cover shrink-0"
                src={car.car.image}
                alt={car.car.name}
              />

              {/* CAR DETAILS */}
              <div className="flex flex-col flex-1 min-w-0">
                {/* NAME */}
                <span className="font-semibold text-[#0B1F33] text-base">
                  {car.car.name}
                </span>

                {/* BASIC DETAILS */}
                <span className="text-sm text-[#667085] mt-1">
                  {car.car.bodyType} · {car.car.transmission} ·{" "}
                  {car.car.fuelType}
                </span>

                {/* PRICE */}
                <span className="font-bold text-[#0B1F33] mt-2">
                  ₦{(car.car.price * car.quantity).toLocaleString()}
                </span>

                {/* BOTTOM ROW */}
                <div className="flex items-center justify-between mt-auto pt-3">
                  {/* QUANTITY */}
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() => decrementQuantity(car.car.id)}
                      className="flex items-center justify-center w-9 h-9 text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="flex items-center justify-center w-10 h-9 border-x border-gray-300 text-sm">
                      {car.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => incrementQuantity(car.car.id)}
                      className="flex items-center justify-center w-9 h-9 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(car.car.id)}
                    title="Remove from cart"
                    className="flex items-center justify-center w-9 h-9 rounded-md text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <OrderSummary
            subtotal={cartItems.reduce((acc, item) => acc + item.car.price * item.quantity, 0)}
            itemCount={cartNumber}
            delivery={cartItems.length > 0 ? 500 : 0}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
