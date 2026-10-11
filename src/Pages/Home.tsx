import BrandSelect from "../Components/BrandSelect"
import FeaturedVehicle from "../Components/FeaturedVehicle"
import Hero from "../Components/Hero"
import SearchCom from "../Components/SearchCom"


const Home = () => {
  return (
    <>
     <Hero />
      <SearchCom />
      <div  className="md:px-10 px-3 mb-5">
        <FeaturedVehicle />
        <BrandSelect />
      </div>
    </>
  )
}

export default Home