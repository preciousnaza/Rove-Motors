import { CarList } from "../Datas/Carlist";
import CarCard from "./CarCard";

const Carlist = () => {
  return (
    <>
      <div className="mx-2">
        <div className="mt-5">
          <p className="text-md">24 Vehicles found</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mt-2 ">
          {CarList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carlist;
