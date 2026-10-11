import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:hidden bg-[#0b1f33]  flex flex-col items-center justify-center py-4 text-white mt-7">
        <div>
          <h2 className="flex justify-center text-4xl font-bold tracking-[0.1em] h-[33px]">
            R<span className="text-[#c9a227]">O</span>VE
          </h2>
          <p className="text-[#c9a227] tracking-[0.3em] flex justify-center">
            Motors
          </p>
          <p className="flex justify-center text-sm mt-1">
            Drive what moves you.
          </p>
        </div>
        <div className="mt-7 mb-5">
          <div className="flex justify-center gap-5">
            <Link to="/about" className="hover:text-[#c9a227]">About Us</Link>
            <span className="text-[#c9a227]">|</span>
            <Link to="/contact" className="hover:text-[#c9a227]">Contact Us</Link>
          </div>
          <div className="flex justify-center gap-5 mt-3">
            <Link to="/privacy" className="hover:text-[#c9a227]">Privacy Policy</Link>
            <span className="text-[#c9a227]">|</span>
            <Link to="/terms" className="hover:text-[#c9a227]">Terms & Condition</Link>
          </div>
        </div>

        <div className="border-b border-white w-100 mb-3"></div>

        <div className="py-3 text-sm">
          &copy;2026 Rove Motors.All right reserved.
        </div>
      </div>

      {/* Desktop Design */}
      <div className="mt-7 hidden md:block bg-[#0b1f33]  flex flex-col items-center justify-center py-4 text-white lg:px-10">
        <div className="grid grid-cols-4 gap-8 px-5 pt-5">
          <section>
            <h2 className=" text-4xl font-bold tracking-[0.1em] h-[38px]">
              R<span className="text-[#c9a227]">O</span>VE
            </h2>
            <p className="text-[#c9a227] tracking-[0.3em] ml-3">
              Motors
            </p>
            <p className=" text-sm mt-2">
              Drive what moves you.
            </p>
            <p className="mt-5 text-[13px]">
              Premium cars. Trusted deals. A better way to drive. Rove Motor
              brings you the best vehicle, with ease and confidence.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <FaInstagram className="w-5 h-5 cursor-pointer" />
              <FaFacebook className="w-5 h-5 cursor-pointer" />
              <FaTiktok className="w-5 h-5 cursor-pointer" />
              <FaYoutube className="w-5 h-5 cursor-pointer" />
              <FaLinkedin className="w-5 h-5 cursor-pointer" />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <div className="flex flex-col gap-5 mt-5  text-sm">
              <Link className="hover:text-[#667085]" to="/">Home</Link>
              <Link className="hover:text-[#667085]" to="/inventory">Inventory</Link>
              <Link className="hover:text-[#667085]" to="/compare">Compare</Link>
              <Link className="hover:text-[#667085]" to="/favorites">Favorites</Link>
              <Link className="hover:text-[#667085]" to="/cart">Cart</Link>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Support</h2>
            <div className="mt-5 gap-5 flex flex-col text-sm"> 
              <Link className="hover:text-[#667085]" to="/about">About Us</Link>
              <Link className="hover:text-[#667085]" to="/contact">Contact Us</Link>
              <Link className="hover:text-[#667085]" to="/about#faq">FAQs</Link>
              <Link className="hover:text-[#667085]" to="/terms">Terms & Conditions</Link>
              <Link className="hover:text-[#667085]" to="/privacy">Privacy Policy</Link>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Get In Touch</h2>
            <div className="flex flex-col mt-5 text-[13px] gap-3">
              <span className="flex gap-2">
                <MapPin size={20}/>
                <p>Awka, Anambra State, Nigeria.</p>
              </span>
              <span className="flex gap-2 ">
                <Mail size={20}/>
                <p>Rove@gmail.com</p>
              </span>
              <span className="flex gap-2">
                <Phone size={20}/>
                <p>+234 701 234 5678</p>
              </span>
            </div>
            <div className="mt-5">
              <h2 className="mb-1">Stay Updated</h2>
              <p className="text-[12px]">Get the latest cars, offers and updates from Rove Motors.</p>
              <span className="relative">
                <input placeholder="Get in touch" type="text" className="border border-gray-500 rounded-full px-2 py-1 mt-2 text-sm w-full h-8 outline-none"/>
                <ArrowRight className=" absolute top-1/2 -translate-y-1/2 right-0.5  bg-[#c9a227] rounded-full w-7 h-7 p-1"/>
              </span>
            </div>
          </section>
        </div>

         <div className="border-b border-white w-full mt-4 mb-3"></div>

        <div className="flex items-center justify-center">
          <p className="py-3 text-sm">
         &copy;2026 Rove Motors. All right reserved.
        </p>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
