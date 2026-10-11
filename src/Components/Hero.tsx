import Heroimg from '../assets/Hero-img.png'
import { MoveRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='h-[320px] w-full bg-cover bg-[center_70%] bg-no-repeat py-8 px-4 min-[959px]:px-10' style={{ backgroundImage: `url(${Heroimg})` }}>
          <div className="text-white max-w-[350px] min-[959px]:max-w-[430px]">
             <h1 className='text-4xl min-[624px]:text-6xl font-bold '>Drive Your <span className='block min-[959px]:flex text-[#c9a227]'>Next Story</span> </h1>
             <p className='mt-3 text-sm '>Premium Vehicles. Trusted Dealership. Find the car that fits your journey with Rove Motors.</p>
          </div>
          <div className=" mt-4 flex flex-row gap-4 text-white">
            <Link to="/inventory" className="bg-[#c9a227]  py-2 px-6 rounded-md hover:bg-[#b8911a] font-semibold transition duration-300 ease-in-out md:text-sm md:w-[170px] md:px-4">
              Explore Inventory
              <MoveRightIcon className="ml-2 inline-block md:hidden" />
            </Link>
            <Link to="/about" className='hidden md:block py-2 px-4 border-2 border-[#c9a227] rounded-md hover:bg-[#c9a227] font-semibold'>
              Learn More
            </Link >
          </div>
      </div>
    </>
  )
}

export default Hero