import {Search} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCom = () => {

  const [Brand,setBrand] = useState("")
  const [Model,setModel] = useState("")
  const [Year,setYear] = useState("")
  const [Transmission,setTransmission] = useState("")
  const navigate = useNavigate();

  const handleSearch = ()=> {
    navigate(`/inventory?brand=${Brand}&model=${Model}&year=${Year}&transmission=${Transmission}`)
  }



  return (
    <>
      <div className="flex flex-row items-center justify-center hidden md:block mx-10 bg-white rounded-md shadow-lg p-6 mt-[-30px]">
         <h2 className="font-semibold text-xl">Search for Your Perfect Car</h2>
         <div className="grid grid-cols-5 gap-5 mt-4 place-items-center">
            <div className="w-full">
              <p className="text-md">Brand</p>
               <select value={Brand} onChange={(e) => setBrand(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm h-8 outline-none ">
                <option value="" >Select Brand</option>
                <option value="Bmw">BMW</option>
                <option value="Porche">Porche</option>
              </select>
            </div>
            <div className="w-full">
              <p>Model</p>
              <select value={Model} onChange={(e)=> setModel(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm h-8 outline-none">
                <option value="">Select Model</option>
                <option value="Toyota x5">Toyota x5</option>
                <option value="bmw x5">bmw x5</option>
              </select>
            </div>
            <div className="w-full">
              <p>Year</p>
              <select value={Year} onChange={(e)=> setYear(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm h-8 outline-none">
                <option value="">Select Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div className="w-full">
              <p>Transmission</p>
              <select value={Transmission} onChange={(e)=> setTransmission(e.target.value)}  className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm h-8 outline-none">
                <option value="">Select Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className="">
              <button className="w-full flex flex-row items-center justify-center gap-2 bg-[#c9a227] lg:py-2 lg:px-8 mt-5 min-[959px]:mt-3 rounded-md hover:bg-[#b8911a] text-white min-[959px]:text-md md:text-sm md:px-2 md:py-1 font-semibold transition duration-300 ease-in-out"
              onClick={handleSearch}>
                <Search className="min-[959px]:w-[24px] min-[959px]:h-[24px] md:w-[20px] md:h-[20px]"/>
                 <span>Search</span>
              </button>
            </div>
           
         </div>
      </div>
    </>
  )
}

export default SearchCom