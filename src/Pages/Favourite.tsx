import {
  ArrowRight,
  CarFront,
  ChevronDown,
  Fuel,
  Heart,
  Trash2,
  GaugeCircle,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useFavourite } from "../Context/FavouriteContext";

const Favourite = () => {
  const {
    FavouriteCar,
    removeFromFavourite,
    clearFavourite,
  } = useFavourite();

  return (
    <div className="min-h-screen bg-[#F7F6F2]">

      {/* ================= HERO ================= */}
      <section className="bg-[#0B1F33] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold tracking-[0.18em] text-[#C9A227]">
            YOUR FAVOURITES
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-[Manrope] text-3xl font-bold text-white sm:text-4xl">
                Cars You Love
              </h1>

              <p className="mt-2 max-w-xl text-sm text-gray-300 sm:text-base">
                Keep your favourite vehicles in one place and come back
                whenever you're ready.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Heart
                size={18}
                className="text-[#C9A227]"
                fill="#C9A227"
              />

              <span>
                {FavouriteCar.length}{" "}
                {FavouriteCar.length === 1 ? "vehicle" : "vehicles"}
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">


          {/* ================= SIDEBAR ================= */}
          <aside className="w-full lg:w-[220px] lg:shrink-0">

            <div className="rounded-md border border-gray-200 bg-white p-3">

              {/* MY FAVOURITES */}
              <div className="flex items-center justify-between rounded-md bg-[#F7F6F2] px-3 py-3">
                <div className="flex items-center gap-3">

                  <Heart
                    size={18}
                    className="text-[#C9A227]"
                    fill="#C9A227"
                  />

                  <span className="text-sm font-semibold text-[#0B1F33]">
                    My Favourites
                  </span>

                </div>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-[#0B1F33]">
                  {FavouriteCar.length}
                </span>
              </div>


              {/* SIDEBAR LINKS */}
              <div className="mt-2 flex flex-col gap-1">

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-left text-sm text-[#667085] transition-colors hover:bg-gray-50 hover:text-[#0B1F33]"
                >
                  <Heart size={17} />
                  Recently Viewed
                </button>

                <Link
                  to="/compare"
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-[#667085] transition-colors hover:bg-gray-50 hover:text-[#0B1F33]"
                >
                  <CarFront size={17} />
                  Compare List
                </Link>

              </div>


              {/* DIVIDER */}
              <div className="my-3 border-t border-gray-200" />


              {/* QUICK ACTIONS */}
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-[#667085]">
                Quick Actions
              </p>

              <div className="mt-2 flex flex-col gap-1">

                <button
                  type="button"
                  onClick={clearFavourite}
                  disabled={FavouriteCar.length === 0}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-left text-sm text-[#667085] transition-colors hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Trash2 size={17} />
                  Clear All Favourites
                </button>

                <Link
                  to="/inventory"
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-[#667085] transition-colors hover:bg-gray-50 hover:text-[#0B1F33]"
                >
                  <ShoppingBag size={17} />
                  Continue Shopping
                </Link>

              </div>

            </div>


            {/* SMALL PROMO CARD */}
            <div className="mt-5 hidden rounded-md bg-[#0B1F33] p-5 lg:block">

              <p className="text-xs font-semibold tracking-wider text-[#C9A227]">
                READY FOR YOUR NEXT RIDE?
              </p>

              <h3 className="mt-2 font-[Manrope] text-lg font-bold text-white">
                Find Your Next Car
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-300">
                Explore our collection and discover a vehicle that fits
                your lifestyle.
              </p>

              <Link
                to="/inventory"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#C9A227] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#b28f1d]"
              >
                Browse Inventory
                <ArrowRight size={15} />
              </Link>

            </div>

          </aside>


          {/* ================= FAVOURITES AREA ================= */}
          <section className="min-w-0 flex-1">

            {/* HEADER */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <Heart
                  size={24}
                  className="text-[#C9A227]"
                  fill="#C9A227"
                />

                <h2 className="font-[Manrope] text-2xl font-bold text-[#0B1F33]">
                  My Favourites
                </h2>

                <span className="text-lg text-[#667085]">
                  ({FavouriteCar.length})
                </span>

              </div>


              {/* SORT */}
              {FavouriteCar.length > 0 && (
                <div className="relative">

                  <select
                    className="h-10 w-full appearance-none rounded-md border border-gray-300 bg-white pl-4 pr-10 text-sm text-[#667085] outline-none focus:border-[#C9A227] sm:w-[190px]"
                    defaultValue="recent"
                  >
                    <option value="recent">
                      Recently Added
                    </option>

                    <option value="price-low">
                      Price: Low to High
                    </option>

                    <option value="price-high">
                      Price: High to Low
                    </option>

                    <option value="name">
                      Name
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]"
                  />

                </div>
              )}

            </div>


            {/* ================= EMPTY STATE ================= */}
            {FavouriteCar.length === 0 ? (

              <div className="mt-6 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-5 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F6F2]">
                  <Heart
                    size={30}
                    className="text-[#C9A227]"
                  />
                </div>

                <h3 className="mt-5 font-[Manrope] text-xl font-bold text-[#0B1F33]">
                  No Favourite Cars Yet
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#667085]">
                  You haven't saved any vehicles yet. Browse our inventory
                  and tap the heart icon to save cars you love.
                </p>

                <Link
                  to="/inventory"
                  className="mt-6 flex items-center gap-2 rounded-md bg-[#C9A227] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b28f1d]"
                >
                  Browse Inventory
                  <ArrowRight size={17} />
                </Link>

              </div>

            ) : (

              /* ================= CAR GRID ================= */
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {FavouriteCar.map((car) => (

                  <article
                    key={car.id}
                    className="group overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    {/* IMAGE */}
                    <div className="relative">

                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                      {/* FAVOURITE BUTTON */}
                      <button
                        type="button"
                        onClick={() => removeFromFavourite(car.id)}
                        title="Remove from favourites"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition-colors hover:bg-white"
                      >
                        <Heart
                          size={19}
                          className="text-[#C9A227]"
                          fill="#C9A227"
                        />
                      </button>

                    </div>


                    {/* DETAILS */}
                    <div className="p-4">

                      <p className="text-xs text-[#667085]">
                        {car.brand}
                      </p>

                      <h3 className="mt-1 line-clamp-1 font-[Manrope] text-base font-bold text-[#0B1F33]">
                        {car.name}
                      </h3>


                      {/* PRICE */}
                      <p className="mt-2 font-bold text-[#0B1F33]">
                        ₦{car.price.toLocaleString()}
                      </p>


                      {/* SPECS */}
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#667085]">

                        <span className="flex items-center gap-1.5">
                          <CarFront size={15} />
                          {car.bodyType}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <GaugeCircle size={15} />
                          {car.transmission}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Fuel size={15} />
                          {car.fuelType}
                        </span>

                      </div>


                      {/* ACTIONS */}
                      <div className="mt-5 flex gap-2">

                        <Link
                          to={`/cars/${car.id}`}
                          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#C9A227] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#b28f1d]"
                        >
                          View Details
                          <ArrowRight size={15} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => removeFromFavourite(car.id)}
                          title="Remove from favourites"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 text-[#667085] transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            )}

          </section>

        </div>

      </main>

    </div>
  );
};

export default Favourite;