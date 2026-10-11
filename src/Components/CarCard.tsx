import {
  ArrowRight,
  Calendar,
  CarFront,
  Fuel,
  Gauge,
  GaugeCircle,
  Heart,
  ShoppingCart,
  GitCompareArrows 
} from "lucide-react";
import type { Cars } from "../Cars";
import { useState } from "react";
import { useCompare } from "../Context/CompareContext";
import { useCart } from "../Context/CartContext";
import { useFavourite } from "../Context/FavouriteContext";
import { Link } from "react-router-dom";

type carProps = {
  car: Cars;
};

const CarCard = ({ car }: carProps) => {
  const { addToCompare,compareCars,removeFromCompare } = useCompare();
  const [Like, setLike] = useState(false);
  const isCompared = compareCars.some((compareCar) => compareCar.id === car.id)
  const {addToCart} = useCart();
  const {addToFavourite} = useFavourite();



  return (
    <>
      <div className="flex flex-col gap-5 bg-white shadow-lg rounded-md p-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-xl">
        <div className="relative">
         
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover object-no-repeat rounded-md object-[center_50%] "
          />

          <span
            title="Favourite"
            onClick={()=> {addToFavourite(car)}}
            className="absolute top-4 right-5 flex items-center justify-center rounded-full bg-white w-[30px] h-[30px] "
          >
            <Heart
              fill={Like ? "#c9a227" : "transparent"}
              stroke-width={Like ? "none" : "2"}
              stroke="#c9a227"
              className=" text-black w-[20px] h-[20px]"
              onClick={() => setLike(!Like)}
            />
          </span>

          <span
            title="Add to Cart"
            onClick={ () => {
               addToCart(car);
            }
            }
            className="absolute top-15 right-5 flex items-center justify-center rounded-full bg-white w-[30px] h-[30px]"
          >
            <ShoppingCart
              stroke-width="2"
              className="text-black w-[20px] h-[20px] "
            />
          </span>
        </div>
        <div>
          <h3 className="text-md font-semibold">{car.name}</h3>
          <p className="text-[#667085] text-sm">{car.brand}</p>
          <p className="font-bold mt-2 text-[#c9a227]">
            {" "}
            ${car.price.toLocaleString()}
          </p>
          <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-black">
            <span className="flex flex-row gap-1">
              <Fuel size={16} />
              <p className="">{car.fuelType}</p>
            </span>
            <span className="flex flex-row gap-1">
              <GaugeCircle size={16} />
              <p>{car.transmission}</p>
            </span>
            <span className="flex flex-row gap-1">
              <CarFront size={16} />
              <p>{car.bodyType} </p>
            </span>
            <span className="flex flex-row gap-1">
              <Gauge size={16} />
              <p>{car.mileage} </p>
            </span>
            <span className="flex flex-row gap-1">
              <Calendar size={16} />
              <p>{car.year}</p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
             <Link to={`/detail/${car.id}`} className="flex gap-3 items-center justify-center text-white bg-black w-full rounded-md py-2 px-2 mt-5 text-sm hover:bg-[#222]">
             
            View Details
            <ArrowRight size={20} />
          </Link>

           <button  onClick={() => {
            if(isCompared){
              removeFromCompare(car.id)
            }else{
              addToCompare(car)
            }
 
}} className="flex gap-3 items-center justify-center text-white bg-black w-full rounded-md py-1 px-2 mt-5 text-sm hover:bg-[#222]">
            {isCompared? "Added" : "Compare"}
            <GitCompareArrows size={20} />
          </button>
          </div>
         
        </div>
      </div>
    
    </>
  );
};

export default CarCard;
