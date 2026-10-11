import {
  ArrowRight,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";

type OrderSummaryProps = {
  subtotal: number;
  itemCount: number;
  delivery: number;

};

const OrderSummary = ({
  subtotal,
  itemCount,
  delivery,
}: OrderSummaryProps) => {
  const total = subtotal + delivery;

  return (
    <div className="w-full rounded-md border border-gray-200 bg-white p-5">

      {/* TITLE */}
      <h2 className="text-xl font-bold text-[#0B1F33]">
        Order Summary
      </h2>

      {/* PRICE DETAILS */}
      <div className="mt-6 flex flex-col gap-4">

        {/* SUBTOTAL */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#667085]">
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>

          <span className="font-medium text-[#0B1F33]">
            ₦{subtotal.toLocaleString()}
          </span>
        </div>

        {/* DELIVERY */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#667085]">
            Delivery &amp; Handling
          </span>

          <span className="font-medium text-[#0B1F33]">
            {delivery === 0
              ? "₦0"
              : `₦${delivery.toLocaleString()}`}
          </span>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="my-5 border-b border-gray-200" />

      {/* TOTAL */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-[#0B1F33]">
          Total
        </span>

        <span className="text-xl font-bold text-[#0B1F33]">
          ₦{total.toLocaleString()}
        </span>
      </div>

      {/* CHECKOUT BUTTON */}
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#C9A227] px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b28f1d]"
      >
        <LockKeyhole size={16} />
        Proceed to Checkout
        <ArrowRight size={18} />
      </button>

      {/* SECURE CHECKOUT */}
      <div className="mt-4 flex items-center gap-3 rounded-md bg-[#EAF4F7] px-4 py-4">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <ShieldCheck
            size={24}
            className="text-[#0B1F33]"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-[#0B1F33]">
            Secure Checkout
          </p>

          <p className="mt-1 text-xs text-[#667085]">
            Your information is safe and protected.
          </p>
        </div>
      </div>

      {/* PROMO CODE */}
      <div className="mt-4 rounded-md border border-gray-200 p-4">

        <div className="flex items-center gap-2">
          <Tag
            size={18}
            className="text-[#0B1F33]"
          />

          <p className="text-sm font-semibold text-[#0B1F33]">
            Have a Promo Code?
          </p>
        </div>

        <div className="mt-3 flex gap-2">

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter code (e.g. ROVE10)"
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-xs outline-none placeholder:text-[#98A2B3] focus:border-[#C9A227]"
            />
          </div>

          <button
            type="button"
            className="h-10 rounded-md border border-[#C9A227] px-4 text-sm font-medium text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-white"
          >
            Apply
          </button>
        </div>
      </div>

      {/* SERVICE FEATURES */}
      <div className="mt-5 grid grid-cols-3 border-t border-gray-200 pt-5">

        {/* FREE DELIVERY */}
        <div className="flex flex-col items-center gap-2 border-r border-gray-200 px-2 text-center">
          <Truck
            size={21}
            className="text-[#0B1F33]"
          />

          <div>
            <p className="text-[11px] font-semibold text-[#0B1F33]">
              Free Delivery
            </p>

            <p className="mt-1 text-[10px] text-[#667085]">
              On selected areas
            </p>
          </div>
        </div>

        {/* SECURE PAYMENT */}
        <div className="flex flex-col items-center gap-2 border-r border-gray-200 px-2 text-center">
          <ShieldCheck
            size={21}
            className="text-[#0B1F33]"
          />

          <div>
            <p className="text-[11px] font-semibold text-[#0B1F33]">
              Secure Payment
            </p>

            <p className="mt-1 text-[10px] text-[#667085]">
              Multiple options
            </p>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col items-center gap-2 px-2 text-center">
          <Headphones
            size={21}
            className="text-[#0B1F33]"
          />

          <div>
            <p className="text-[11px] font-semibold text-[#0B1F33]">
              24/7 Support
            </p>

            <p className="mt-1 text-[10px] text-[#667085]">
              We're here to help
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderSummary; 