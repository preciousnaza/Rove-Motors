import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footernav from "./Components/Footernav";
import Inventory from "./Pages/Inventory";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Compare from "./Pages/Compare";
import { CompareProvider } from "./Context/CompareContext";
import Cart from "./Pages/Cart";
import { CartContentProvider } from "./Context/CartContext";
import {FavouriteProvider} from "./Context/FavouriteContext"
import Favourite from "./Pages/Favourite";
import CarDetail from "./Components/CarDetail";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <CompareProvider>
        <CartContentProvider>
          <FavouriteProvider >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/detail/:id" element={<CarDetail />}/>
        </Routes>
       <Footer />
        <Footernav />
         </FavouriteProvider>
        </CartContentProvider>
        </CompareProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
