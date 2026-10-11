import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { FeaturedCar } from "../Datas/FaeturedCar"
import CarCard from "./CarCard"

const FeaturedVehicle = () => {
  return (
    <>
    <div className="mx-2">
      <div className="mt-6 flex flex-row justify-between items-center ">
        <h2 className="text-md md:text-lg font-semibold">Featured Cars</h2>
        <Link to="/inventory" className="flex flex-row gap-1 text-sm hover:text-[#c9a227] cursor-pointer">
          <p>View All Cars</p>
          <ArrowRight className="w-[20px] h-[20px]"/>
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mt-2 ">
        {
          FeaturedCar.map((car) => (
            <CarCard key={car.id} car={car}/>
          ))
        }
      </div>
    </div>
      
    </>
  )
}

export default FeaturedVehicle