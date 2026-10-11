import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Cars } from "../Cars";

type CompareContextType = {
  compareCars : Cars[];
  addToCompare : (car: Cars) => void;
  removeFromCompare : (id: number) => void
  clearAllCars: ()=> void
}

const CompareContext = createContext< CompareContextType | undefined >(undefined)

type CompareProviderProps = {
  children: ReactNode;
}

export const CompareProvider = ({children} : CompareProviderProps) => {
    const [compareCars, setCompareCars] = useState<Cars[]>([]);

   const addToCompare = (car: Cars) => {
  setCompareCars((prev) => {
    const alreadyAdded = prev.some((item) => item.id === car.id);

    if (alreadyAdded) {
      return prev;
    }

     if (prev.length >= 5) {
      return prev;
    }

    return [...prev, car];
  });
};

    const removeFromCompare = (id : number) => {
      setCompareCars((prev) =>
      prev.filter((car) => car.id !== id))
    }

    const clearAllCars = () => {
      setCompareCars([])
    }

    return (
  <CompareContext.Provider
    value={{
      compareCars,
      addToCompare,
      removeFromCompare,
      clearAllCars
    }}
  >
    {children}
  </CompareContext.Provider>
); 
}

export const useCompare = () => {
  const context = useContext(CompareContext);

  if (!context) {
    throw new Error("useCompare must be used inside CompareProvider");
  }

  return context;
};