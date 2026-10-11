import logo from '../assets/logo-4.png'
import { Menu, X,Heart,ShoppingBag} from "lucide-react";
import {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext"
import NavSearch from './NavSearch';


    

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const MenuRef = useRef<HTMLDivElement>(null)
  const {cartNumber} = useCart();

  useEffect(() => {
    const handleClickMouse = (event:MouseEvent) => {
      if(MenuRef.current && !MenuRef.current.contains(event.target as Node)){
        setIsMenuOpen(false)
    }
    }
    document.addEventListener("mousedown", handleClickMouse)
    return () => {
      document.removeEventListener("mousedown", handleClickMouse)
    }
  }, [])

  return (
    <>
      <div className="sticky z-50 top-0 navbar flex justify-between items-center bg-[#0b1f33] px-3 md:px-4">
        <div className="logo w-30 h-20">
          <Link to="/"> <img src={logo} alt="Logo" className='w-full h-full object-contain'/></Link>
         
        </div>

        <div>
          <ul className='flex flex-row items-center text-white gap-8  cursor-pointer'>
            <Link to="/" className='hidden md:block relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full'>Home</Link>
            <Link to="/inventory" className='hidden md:block relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full'>Inventory</Link>
            <Link to="/compare" className='hidden md:block relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full'>Compare</Link>
            <Link to="/about" className='hidden min-[959px]:block relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full'>About</Link>
            <Link to="/contact"  className='hidden min-[959px]:block relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full'>Contact Us</Link>
          </ul>
        </div>
      
          <div className=' flex flex-row justify-between items-center gap-6 '>
             <NavSearch />
            <Link  to="/favourite" title='wishlist' className='hidden md:block'>
                 <Heart className='text-white text-2xl'/>
            </Link >
            <Link to="/cart"  title='cart' className='relative hidden md:block'>
                 <ShoppingBag className='text-white text-2xl'/>
                  <p className='text-sm text-white absolute bottom-3 left-4 bg-[#c9a227] rounded-full w-4 h-4 flex justify-center items-center'>{cartNumber}</p>
            </Link >
             <button  onClick={() => setIsMenuOpen(!isMenuOpen)}  className='min-[959px]:hidden focus:outline-none'>
              {isMenuOpen ? <X className='text-white text-2xl' /> : <Menu className='text-white text-2xl' /> }
          </button>
          <button className='hidden min-[959px]:block text-[#c9a227] border border-[#c9a227] py-1 px-4 rounded-md hover:bg-[#c9a227] hover:text-[#151515]'>Sign in</button>
        
         </div>

         
      </div>

     <div ref={MenuRef} >
              {isMenuOpen && (
            <nav className="fixed top-9 flex flex-col top-21 right-2 bg-[#0b1f33] py-4 px-7 rounded-lg shadow-lg text-white space-y-2 text-lg z-5">
               <Link to="/contact" className='hover:text-[#667085] py-1 px-2 rounded-md cursor-pointer'>Contact Us </Link >
               <Link to="/about" className='hover:text-[#667085] py-1 px-2 rounded-md cursor-pointer'>About Us</Link >
               <Link to="/login" className='hover:text-[#667085] py-1 px-2 rounded-md cursor-pointer'>Login</Link >
               <Link to="/signup" className='hover:text-[#667085] py-1 px-2 rounded-md cursor-pointer'>Sign Up</Link >
            </nav>
          )}
          </div>
    </>
  )
}

export default Navbar