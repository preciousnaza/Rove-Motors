import {
  ArrowLeft,
  Calendar,
  CarFront,
  CheckCircle2,
  Fuel,
  Gauge,
  GaugeCircle,
  Heart,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CarList } from "../Datas/Carlist";

const CarDetail = () => {
  const { id } = useParams();

  const car = CarList.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-[#F7F6F2] flex items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F33] text-white">
            <CarFront size={30} />
          </div>

          <h1 className="text-2xl font-bold text-[#0B1F33]">
            Car Not Found
          </h1>

          <p className="mt-2 text-[#667085]">
            The vehicle you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/inventory"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0B1F33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132d47]"
          >
            <ArrowLeft size={18} />
            Back to Inventory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      {/* ================= HEADER / BREADCRUMB ================= */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <Link
          to="/inventory"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#667085] transition hover:text-[#0B1F33]"
        >
          <ArrowLeft size={17} />
          Back to Inventory
        </Link>

        <div className="mt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
            {car.brand}
          </p>

          <h1 className="mt-1 text-2xl font-bold text-[#0B1F33] sm:text-3xl lg:text-4xl">
            {car.name}
          </h1>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.75fr]">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Car Image */}
            <div className="relative overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={car.image}
                alt={car.name}
                className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[500px]"
              />

              {/* Favourite */}
              <button
                type="button"
                title="Add to favourites"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
              >
                <Heart
                  size={21}
                  className="text-[#C9A227]"
                />
              </button>

              {/* Available badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0B1F33] shadow-md">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available
              </div>
            </div>

            {/* ================= VEHICLE SPECS ================= */}
            <div className="mt-6 rounded-xl bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
                  Vehicle Information
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#0B1F33]">
                  Vehicle Specifications
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
                {/* Year */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <Calendar size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Year</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.year}
                    </p>
                  </div>
                </div>

                {/* Fuel */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <Fuel size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Fuel Type</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.fuelType}
                    </p>
                  </div>
                </div>

                {/* Transmission */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <GaugeCircle size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Transmission</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.transmission}
                    </p>
                  </div>
                </div>

                {/* Body Type */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <CarFront size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Body Type</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.bodyType}
                    </p>
                  </div>
                </div>

                {/* Mileage */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <Gauge size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Mileage</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.mileage}
                    </p>
                  </div>
                </div>

                {/* Brand */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F7F6F2]">
                    <Zap size={19} className="text-[#C9A227]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#667085]">Brand</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                      {car.brand}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= WHY ROVE ================= */}
            <div className="mt-6 rounded-xl bg-[#0B1F33] p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]">
                  <ShieldCheck size={23} className="text-white" />
                </div>

                <div>
                  <h2 className="font-semibold">
                    A vehicle you can drive with confidence
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Every vehicle at Rove Motors is carefully selected to give
                    you a smooth, transparent and reliable car-buying
                    experience.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 size={17} className="text-[#C9A227]" />
                  Quality Vehicles
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 size={17} className="text-[#C9A227]" />
                  Transparent Process
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 size={17} className="text-[#C9A227]" />
                  Customer Support
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
              {/* Brand */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#F7F6F2] px-3 py-1 text-xs font-semibold text-[#0B1F33]">
                  {car.brand}
                </span>

                <div className="flex items-center gap-1 text-sm text-[#667085]">
                  <Star
                    size={16}
                    fill="#C9A227"
                    className="text-[#C9A227]"
                  />
                  <span>Premium</span>
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-tight text-[#0B1F33] sm:text-3xl">
                {car.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Experience comfort, performance and confidence behind the
                wheel.
              </p>

              {/* Price */}
              <div className="mt-6 border-y border-gray-200 py-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[#667085]">
                  Starting Price
                </p>

                <p className="mt-1 text-3xl font-bold text-[#0B1F33]">
                  ₦{car.price.toLocaleString()}
                </p>
              </div>

              {/* Quick specs */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <p className="text-xs text-[#667085]">Year</p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                    {car.year}
                  </p>
                </div>

                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <p className="text-xs text-[#667085]">Mileage</p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                    {car.mileage}
                  </p>
                </div>

                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <p className="text-xs text-[#667085]">Fuel</p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                    {car.fuelType}
                  </p>
                </div>

                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <p className="text-xs text-[#667085]">Transmission</p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                    {car.transmission}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0B1F33] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132d47]"
                >
                  <Calendar size={18} />
                  Book a Test Drive
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-[#0B1F33] bg-white px-5 py-3.5 text-sm font-semibold text-[#0B1F33] transition hover:bg-[#F7F6F2]"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-start gap-3 border-t border-gray-200 pt-5">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#0B1F33]">
                    Available at Rove Motors
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667085]">
                    Visit our showroom to see this vehicle in person and speak
                    with our team.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="mt-4 rounded-xl border border-[#C9A227]/30 bg-[#FFFDF5] p-5">
              <p className="text-sm font-semibold text-[#0B1F33]">
                Need help choosing?
              </p>

              <p className="mt-1 text-sm leading-5 text-[#667085]">
                Our team can help you understand the vehicle and arrange a
                viewing.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F33] transition hover:text-[#C9A227]"
              >
                Contact our team
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetail;