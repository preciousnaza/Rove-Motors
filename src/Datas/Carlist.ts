import type {Cars} from "../Cars.ts"
import bmwImage from "../assets/FeaturedCars/bmw.jpg";
import porcheImage from "../assets/FeaturedCars/porche.jpg";
import mercedes from "../assets/FeaturedCars/mercedes.jpg"
import toyota from "../assets/FeaturedCars/toyota.jpg"
import rove from "../assets/FeaturedCars/rove.png"

export const CarList : Cars[] = [
   {
    id: 1,
    name: "2022 Toyota X5 xDrive40i",
    model: "Toyota x5",
    brand: "Toyota",
    image: toyota,
    horsepower: "375 hp",
    price: 150000000,
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "5000",
    bodyType: 'coupe',
    quantity : 1
  },

  {
    id: 2,
    name: "2024 Porche Rava XLE",
     model: "porche x5",
     horsepower: "203 hp",
    brand: "Porche",
    image: porcheImage,
    price: 750000,
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "8000",
      bodyType: 'Sedan',
       quantity : 1

  },
  {
    id: 3,
    name: "2023 Mercedes-Benz C300",
     model: "Toyota x5",
     horsepower: "200 hp",
    brand: "Mercedes",
    image: mercedes,
    price: 750000000,
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "8000",
      bodyType: 'Coupe',
       quantity : 1

  },
  {
    id: 4,
    name: "2025 BMW X5 xDrive40i",
     model: "Toyota x5",
     horsepower: "100 hp",
    brand: "BMW",
    image: bmwImage,
    price: 150000000,
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "8000",
    bodyType: 'SUV',
     quantity : 1
  },
  {
     id: 5,
    name: "2024 Porche Rava XLE",
     model: "Toyota x5",
     horsepower: "120 hp",
    brand: "Porche",
    image: porcheImage,
    price: 750000,
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "8000",
      bodyType: 'Sedan',
       quantity : 1

  },
  {
    id: 6,
    name: "2022 Toyota X5 xDrive40i",
     model: "Toyota x5",
     horsepower: "222 hp",
    brand: "Toyota",
    image: rove,
    price: 150000000,
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "5000",
    bodyType: 'coupe',
     quantity : 1
  },
]