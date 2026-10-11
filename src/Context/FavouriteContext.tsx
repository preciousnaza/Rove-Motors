import type { Cars } from "../Cars";
import type { ReactNode } from "react";
import { createContext,useContext, useState } from "react";

type FavouriteContextType = {
  FavouriteCar : Cars[];
  addToFavourite : (car: Cars) => void;
  removeFromFavourite: (id:number) => void;
  clearFavourite: ()=> void
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined)

type FavouriteProviderProps = {
  children: ReactNode;
}

export const FavouriteProvider = ({children}: FavouriteProviderProps)=> {
  const [FavouriteCar,setFavouriteCar] = useState<Cars[]>([])

  const addToFavourite = (car: Cars)=> {
    setFavouriteCar((prev) => {
      const alreadyAdded = prev.some((item) => item.id === car.id);

      if(alreadyAdded){
        return prev
      }

      return [...prev,car]
    }
    )
  }

  const removeFromFavourite = (id: number)=> {
    setFavouriteCar((prev) => 
      prev.filter((item) => item.id !== id)
    )
  }

  const clearFavourite = ()=> {
    setFavouriteCar([])
  }


return (
<FavouriteContext.Provider value={{
  FavouriteCar,
  addToFavourite,
  removeFromFavourite,
  clearFavourite
}}>
  {children}
</FavouriteContext.Provider>
)

}

export const useFavourite = () => {
  const context = useContext(FavouriteContext);

    if (!context) {
    throw new Error("useFavourite must be used inside CompareProvider");
  }

  return context;
};