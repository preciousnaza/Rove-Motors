import { Link } from 'react-router-dom';
import {Heart,ShoppingBag,Home,CarFront,GitCompareArrows} from "lucide-react";
import { useCart } from "../Context/CartContext"

const Footernav = () => {
    const {cartNumber} = useCart();
  return (
    <>
       <div className="md:hidden shadow-md">
        <nav className="shadow-[0_-2px_6px_rgba(0,0,0,0.1)] flex flex flex-row gap-4 items-center justify-between fixed bottom-0 left-0 right-0 py-2 px-3 bg-white">
           <Link to="/" className="flex flex-col justify-center items-center hover:text-[#c9a227]">
              <Home size={18} className=""/>
              <p className="text-sm">Home</p>
           </Link>
           <Link to='/inventory' className='flex flex-col justify-center items-center hover:text-[#c9a227]'>
              <CarFront size={18}/>
              <p className="text-sm ">Inventory</p>
           </Link>
           <Link to='/compare' className='flex flex-col justify-center items-center hover:text-[#c9a227]'>
              <GitCompareArrows size={18}/>
              <p className="text-sm">Compare</p>
           </Link>
           <Link to='/favourite' className='flex flex-col justify-center items-center hover:text-[#c9a227]'>
              <Heart size={18}/>
              <p className="text-sm">Wishlist</p>
           </Link>
           <Link to='/cart' className='relative flex flex-col justify-center items-center hover:text-[#c9a227]'>
              <ShoppingBag size={18}/>
              <p className='text-sm absolute bottom-7 left-4 bg-[#c9a227] rounded-full w-4 h-4 flex justify-center items-center text-white '>{cartNumber}</p>
              <p className="text-sm">Cart</p>
           </Link>
        </nav>
      </div>
    </>
  )
}

export default Footernav