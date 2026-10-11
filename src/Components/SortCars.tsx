import { SlidersHorizontal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { CarList } from "../Datas/Carlist";

type FilterProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<typeof CarList>>;
  sort:string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const SortCars = ({ setSelectedFilter, sort, setSort }: FilterProps) => {
  const [showText, setshowText] = useState(false);
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [body, setBody] = useState("");
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setshowText(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilters = () => {
    const Filters = CarList.filter((car) => {
      return (
        (!brand || car.brand.toLowerCase() === brand.toLowerCase()) &&
        (!fuel || car.fuelType.toLowerCase() === fuel.toLowerCase()) &&
        (!body || car.bodyType.toLowerCase() === body.toLowerCase()) &&
        (!year || car.year === Number(year)) &&
        (!transmission ||
          car.transmission.toLowerCase() === transmission.toLowerCase())
      );
    });

    setSelectedFilter(Filters);
    setshowText(false);
  };

  return (
    <>
      <div>
        <div className="flex justify-between mt-5 mb-3 md:bg-white w-full px-2 py-3 rounded-md">
          {/* FILTERS */}
          <div ref={filterRef} className="relative text-sm md:text-md">
            <button
              className="flex gap-2 text-md font-semibold  rounded-lg border border-gray-300 bg-[#F7F6F2] shadow-lg px-6 py-2 rounded-lg items-center"
              onClick={() => setshowText(!showText)}
            >
              <span>
                <SlidersHorizontal size={20} />
              </span>
              Filter
            </button>

            <div
              className={`${showText ? "block" : "hidden"} absolute z-50 flex flex-col gap-4 bg-white p-5 rounded-lg mt-2 w-60 mt-6`}
            >
              <div>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className={`${body === "brand" ? "text-[#98A2B3]" : "text-black"} border-2 border-gray-300 px-2 py-1 rounded-md  text-sm outline-none w-full`}
                >
                  <option value="brand">Select Brand</option>
                  <option value="mercedes-Benz">Mercedes-Benz</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Land Rover">Land Rover</option>
                </select>
              </div>

              <div>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={`${year === "year" ? "text-[#98A2B3]" : "text-black"} border-2 border-gray-300 px-2 py-1 rounded-md  text-sm outline-none w-full`}
                >
                  <option value="year">Select Year</option>
                  <option value="2026">2026</option>
                  <option value="2020">2020</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div>
                <select
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  className={`${fuel === "fuel" ? "text-[#98A2B3]" : "text-black"} border-2 border-gray-300 px-2 py-1 rounded-md  text-sm outline-none w-full`}
                >
                  <option value="fuel">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                  <option value="Plug-in Hybrid">Plug-in Hybrid</option>
                </select>
              </div>
              <div>
                <select
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className={`${body === "body" ? "text-[#98A2B3]" : "text-black"} border-2 border-gray-300 px-2 py-1 rounded-md  text-sm outline-none w-full`}
                >
                  <option value="body">Body Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Wagon">Wagon</option>
                  <option value="Sports Car">Sports Car</option>
                </select>
              </div>

              <div>
                <select
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className={`${transmission === "transmission" ? "text-[#98A2B3]" : "text-black"} border-2 border-gray-300 px-2 py-1 rounded-md  text-sm outline-none w-full`}
                >
                  <option value="transmission">Transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                  <option value="AMT">AMT</option>
                </select>
              </div>

              <button
                onClick={handleFilters}
                className="flex flex-row justify-center border border-gray-300 rounded-md bg-[#0b1f33] text-white py-1 mt-3 hover:bg-[#16344F]"
              >
                Apply Filters{" "}
              </button>
            </div>
          </div>

          {/* SORT */}
          <div className="flex gap-3 items-center text-sm  md:text-md">
            <h2 className="font-semibold hidden md:block">Sort by</h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              name="sort"
              id="sort"
              className="flex gap-2 text-md font-semibold  rounded-lg border border-gray-300 bg-[#F7F6F2] shadow-lg px-2 py-2 rounded-lg items-center outline-none"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortCars;
