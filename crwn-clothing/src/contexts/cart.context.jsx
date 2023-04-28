import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if existing, return new array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const deleteCartItem = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartPrice(newCartPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };
  const clearItemFromCart = (productToDelete) => {
    setCartItems(clearCartItem(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    deleteItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
