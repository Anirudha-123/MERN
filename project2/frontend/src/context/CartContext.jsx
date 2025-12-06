import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));

    if (Array.isArray(data)) {
      localStorage.removeItem("cart"); // remove corrupted data

      setCart(data);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, loading]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item._id === product._id);

      if (exist) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // const removeFromCart = (id) => {
  //   setCart((prev) => {
  //     const exist = prev.find((item) => item.id === id);

  //     if (!exist) return prev;

  //     if (exist.qty > 1) {
  //       return prev.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty - 1 } : item
  //       );
  //     }

  //     return prev.filter((item) => item.id !== id);
  //   });
  // };

  const removeAllData = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const update = (product, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === product._id ? { ...item, qty: Number(qty) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        // removeFromCart,
        loading,
        update,
        removeAllData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
