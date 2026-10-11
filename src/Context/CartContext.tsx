import { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
import type { Cars } from "../Cars";
import type {CartItems} from "../cart"


type CartContentType = {
  cartItems : CartItems[];
  addToCart : (car: Cars) => void;
  removeFromCart : (id: number) => void;
  cartNumber: number;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: ()=> void
}

const CartContent = createContext<CartContentType | undefined>(undefined)

type carCartPropType = {
  children : ReactNode;
}

export const CartContentProvider = ({children} : carCartPropType) => {
  const [cartItems, setcartItems] = useState<CartItems[]>([])

  const addToCart = (car: Cars) => {
    setcartItems((prev) => {
      const AlreadyAdded = prev.find((item) => item.car.id === car.id)

      if(AlreadyAdded){
        return prev.map((item) => 
          item.car.id === car.id ? 
        {...item, quantity: item.quantity + 1} : item
      );
      }
      return [...prev,{car, quantity: 1}]
    })
  }

  const incrementQuantity = (id: number) => {
  setcartItems((prev) =>
    prev.map((item) =>
      item.car.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decrementQuantity = (id: number) => {
  setcartItems((prev) =>
    prev
      .map((item) =>
        item.car.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  const removeFromCart = (id:number) => {
    setcartItems((prev) => 
      prev.filter((item) => item.car.id !== id)
    )
  }

  const clearCart = () => {
    setcartItems([])
  }


   return (
    <CartContent.Provider 
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      cartNumber: cartItems.length,
      clearCart,
      incrementQuantity,
      decrementQuantity
    }}>
       {children}
    </CartContent.Provider>
  )
}

export const useCart = () => {
  const CartContext = useContext(CartContent)

    if (!CartContext) {
    throw new Error("useCart must be used inside CompareProvider");
  }

  return CartContext;
}
