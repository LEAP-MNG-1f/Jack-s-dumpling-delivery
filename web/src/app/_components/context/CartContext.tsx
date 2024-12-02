"use client";

import { createContext, ReactNode, useContext, useState } from "react";
type CartProviderProps = {
  children: ReactNode;
};

type CartFood = {
  id: number;
  quantity: number;
};

type CartContext = {
  getFoodQuantity: (id: number) => number;
  addCart: (id: number, quantity: number) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cardQuantity: number;
  cartFoods: CartFood[];
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartFoods, setCartFoods] = useState<CartFood[]>([]);

  const cardQuantity = cartFoods.reduce(
    (quantity, food) => food.quantity + quantity,
    0
  );

  function getFoodQuantity(id: number) {
    return cartFoods.find((food) => food.id === id)?.quantity || 0;
  }
  function addCart(id: number, quantity: number) {}

  function increaseCartQuantity(id: number) {}

  function decreaseCartQuantity(id: number) {
    setCartFoods((currFoods) => {
      if (currFoods.find((food) => food.id === id)?.quantity === 1) {
        return currFoods.filter((food) => food.id !== id);
      } else {
        return currFoods.map((food) => {
          if (food.id === id) {
            return { ...food, quantity: food.quantity - 1 };
          } else {
            return food;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartFoods((currFoods) => {
      return currFoods.filter((food) => food.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getFoodQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cardQuantity,
        cartFoods,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
