import {
  ArrowRight,
  CarFront,
  Cog,
  Fuel,
  Plus,
  RefreshCcw,
  Settings2,
  X,
  Zap,
} from "lucide-react";
import { BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCompare } from "../Context/CompareContext";

const Compare = () => {
  const { compareCars, removeFromCompare, clearAllCars } = useCompare();

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#0B1F33]">
      {/* =========================
          PAGE INTRO
      ========================== */}
      <section className="border-b border-[#D9D8D2]">
        <div className="mx-auto max-w-7xl px-5 py-9 md:px-8 md:py-11 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
                  Rove Motors / Compare
                </span>
              </div>

              <h1 className="max-w-3xl font-[Manrope] text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                Compare what matters.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#667085] md:text-base">
                Put your shortlisted vehicles side by side and compare their
                price, performance and key specifications before making your
                decision.
              </p>
            </div>

            {/* VEHICLE COUNT */}
            <div className="flex items-end justify-between border-t border-[#D9D8D2] pt-5 sm:min-w-[260px] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  Vehicles selected
                </p>

                <p className="mt-1 font-[Manrope] text-3xl font-bold">
                  {compareCars.length}
                  <span className="ml-1 text-base font-normal text-[#98A2B3]">
                    / 5
                  </span>
                </p>
              </div>

              {compareCars.length > 0 && (
                <button
                  onClick={clearAllCars}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#667085] transition-colors hover:text-[#0B1F33]"
                >
                  Clear all
                  <RefreshCcw size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VEHICLE SELECTION
      ========================== */}
      <section className="px-5 py-7 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
                Your shortlist
              </p>

              <h2 className="mt-1 font-[Manrope] text-xl font-bold">
                Vehicles to compare
              </h2>
            </div>

            <p className="hidden text-xs text-[#98A2B3] sm:block">
              Select up to five vehicles
            </p>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {/* ADD VEHICLE */}
            {compareCars.length < 5 && (
              <Link
                to="/inventory"
                className="group flex min-h-[285px] min-w-[260px] shrink-0 flex-col justify-between border border-dashed border-[#A8A7A1] bg-white p-5 transition-colors duration-300 hover:border-[#0B1F33]"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center border border-[#0B1F33] transition-colors duration-300 group-hover:bg-[#0B1F33] group-hover:text-white">
                    <Plus size={20} />
                  </div>

                  <h3 className="mt-5 font-[Manrope] text-lg font-bold">
                    Add a vehicle
                  </h3>

                  <p className="mt-2 max-w-[210px] text-xs leading-5 text-[#667085]">
                    Choose another vehicle from our inventory and see how it
                    compares.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                  Browse inventory
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            )}

            {/* SELECTED VEHICLES */}
            {compareCars.map((car) => (
              <div
                key={car.id}
                className="group min-w-[260px] shrink-0 border border-[#D9D8D2] bg-white"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCompare(car.id)}
                    aria-label={`Remove ${car.name}`}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#0B1F33] shadow-sm transition-colors hover:bg-[#0B1F33] hover:text-white"
                  >
                    <X size={15} />
                  </button>

                  {/* GOLD MARKER */}
                  <span className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-[#C9A227]" />
                </div>

                {/* DETAILS */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
                        {car.year} · {car.bodyType}
                      </p>

                      <h3 className="mt-1 font-[Manrope] text-lg font-bold">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between border-t border-[#EBEAE5] pt-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#98A2B3]">
                        Price
                      </p>

                      <p className="mt-1 font-[Manrope] text-base font-bold">
                        ₦{car.price.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={`/inventory/${car.id}`}
                      className="flex items-center gap-1 text-xs font-semibold text-[#0B1F33] transition-colors hover:text-[#C9A227]"
                    >
                      Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          COMPARISON
      ========================== */}
      <section className="px-5 pb-14 pt-3 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {compareCars.length === 0 ? (
            /* EMPTY STATE */
            <div className="border-t border-[#0B1F33] py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#D9D8D2] bg-white">
                <CarFront size={21} />
              </div>

              <h2 className="mt-5 font-[Manrope] text-xl font-bold">
                Nothing to compare yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#667085]">
                Add vehicles from the inventory to compare their price,
                performance and specifications side by side.
              </p>

              <Link
                to="/inventory"
                className="mt-6 inline-flex items-center gap-2 bg-[#0B1F33] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#163450]"
              >
                Browse inventory
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              {/* TABLE TITLE */}
              <div className="mb-5 flex items-end justify-between border-t border-[#0B1F33] pt-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
                    Detailed comparison
                  </p>

                  <h2 className="mt-1 font-[Manrope] text-2xl font-bold md:text-3xl">
                    Specifications
                  </h2>
                </div>

                <p className="hidden text-xs text-[#98A2B3] sm:block">
                  Scroll horizontally to view all vehicles
                </p>
              </div>

              {/* TABLE */}
              <div
                className="overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                <div
                  className="min-w-[760px] border-t border-[#D9D8D2]"
                  style={{
                    display: "grid",
                    gridTemplateColumns: `190px repeat(${compareCars.length}, minmax(180px, 1fr))`,
                  }}
                >
                  {/* HEADER - SPECIFICATION */}
                  <div className="sticky left-0 z-20 border-b border-[#D9D8D2] bg-[#F7F6F2] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#667085]">
                      Specification
                    </p>
                  </div>

                  {/* HEADER - CARS */}
                  {compareCars.map((car) => (
                    <div
                      key={car.id}
                      className="border-b border-l border-[#D9D8D2] bg-white p-4"
                    >
                      <p className="font-[Manrope] text-sm font-bold">
                        {car.name}
                      </p>

                      <p className="mt-1 text-xs text-[#98A2B3]">
                        {car.year} · {car.bodyType}
                      </p>
                    </div>
                  ))}

                  {/* PRICE */}
                  <ComparisonRow
                    icon={<BiMoney size={20} />}
                    label="Price"
                    cars={compareCars}
                    value={(car) => `₦${car.price.toLocaleString()}`}
                    emphasize
                  />

                  {/* ENGINE */}
                  <ComparisonRow
                    icon={<Cog size={19} />}
                    label="Engine"
                    cars={compareCars}
                    value={(car) => car.engine}
                  />

                  {/* HORSEPOWER */}
                  <ComparisonRow
                    icon={<Zap size={19} />}
                    label="Horsepower"
                    cars={compareCars}
                    value={(car) => `${car.horsepower} HP`}
                  />

                  {/* TRANSMISSION */}
                  <ComparisonRow
                    icon={<Settings2 size={19} />}
                    label="Transmission"
                    cars={compareCars}
                    value={(car) => car.transmission}
                  />

                  {/* FUEL */}
                  <ComparisonRow
                    icon={<Fuel size={19} />}
                    label="Fuel"
                    cars={compareCars}
                    value={(car) => car.fuelType}
                  />

                  {/* BODY TYPE */}
                  <ComparisonRow
                    icon={<CarFront size={19} />}
                    label="Body Type"
                    cars={compareCars}
                    value={(car) => car.bodyType}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

/* =====================================
   REUSABLE COMPARISON ROW
===================================== */

type ComparisonRowProps = {
  icon: React.ReactNode;
  label: string;
  cars: any[];
  value: (car: any) => string;
  emphasize?: boolean;
};

const ComparisonRow = ({
  icon,
  label,
  cars,
  value,
  emphasize = false,
}: ComparisonRowProps) => {
  return (
    <>
      {/* LABEL */}
      <div className="sticky left-0 z-10 flex items-center gap-3 border-b border-[#D9D8D2] bg-[#F7F6F2] p-4">
        <span className="text-[#C9A227]">{icon}</span>

        <span className="text-xs font-semibold text-[#0B1F33] md:text-sm">
          {label}
        </span>
      </div>

      {/* VALUES */}
      {cars.map((car) => (
        <div
          key={car.id}
          className={`flex items-center border-b border-l border-[#D9D8D2] bg-white p-4 text-sm ${
            emphasize
              ? "font-[Manrope] font-bold text-[#0B1F33]"
              : "text-[#475467]"
          }`}
        >
          {value(car)}
        </div>
      ))}
    </>
  );
};

export default Compare;