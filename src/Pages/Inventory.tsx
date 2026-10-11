import { Search } from "lucide-react";
import SortCars from "../Components/SortCars";
import CarCard from "../Components/CarCard";
import { useState } from "react";
import { CarList } from "../Datas/Carlist";
import { useSearchParams } from "react-router-dom";

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<typeof CarList>([]);
  const [sort, setSort] = useState("recommended");

  const FilteredCars = CarList.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase()),
  );

  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const transmission = searchParams.get("transmission");

  const FilterSearch = CarList.filter((car) => {
    return (
      (!brand || car.brand.toLowerCase() === brand.toLowerCase()) &&
      (!model || car.model.toLowerCase() === model.toLowerCase()) &&
      (!year || car.year === Number(year)) &&
      (!transmission ||
        car.transmission.toLowerCase() === transmission.toLowerCase())
    );
  });

  const keyword = searchParams.get("search") || "";
  const KeywordSearch = CarList.filter((car) => {
    const searchValue = keyword.toLowerCase().trim();

    return (
      car.name.toLowerCase().includes(searchValue) ||
      car.brand.toLowerCase().includes(searchValue) ||
      car.model.toLowerCase().includes(searchValue)
    );
  });

let carsToDisplay = CarList;

if (search.trim()) {
  carsToDisplay = FilteredCars;
} else if (brand || year || transmission || model) {
  carsToDisplay = FilterSearch;
} else if (keyword) {
  carsToDisplay = KeywordSearch;
} else if (selectedFilter.length > 0) {
  carsToDisplay = selectedFilter;
}

  const sortedCars = [...carsToDisplay].sort((a, b) => {
    switch (sort) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "newest":
        return b.year - a.year;
      default:
        return 0;
    }
  });

  return (
    <>
      <div className="px-5 bg-[#f7f6f2] min-h-screen md:px-10">
        <section className="flex flex-col gap-4 pt-5">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h1 className="font-semibold text-2xl ">Our Inventory</h1>
              <p className="text-sm ">
                Find the right vehicle for your next journey
              </p>
            </div>

            <div className="relative flex items-center max-w-[600px] mt-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" Search by make,model or keyword..."
                className="w-full max-w-[600px] h-10 outline-none bg-[#ffffff] rounded-full text-sm p-2"
              />
              <Search className="absolute top-1/2 -translate-y-1/2 right-2" />
            </div>
          </div>
        </section>

        <section>
          <SortCars
            setSelectedFilter={setSelectedFilter}
            sort={sort}
            setSort={setSort}
          />
          <div>
            {/* <Carlist /> */}
            <div className="mx-2">
              <div className="mt-5">
                <p className="text-md">
                          {sortedCars.length} Vehicles found
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mt-2 ">
                {sortedCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inventory;
