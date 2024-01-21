import React, { createContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const basketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addBasket = (item) => {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[index].count++;
      setBasket([...basket]);
    }
  };

  const deleteBasket = (id) => {
    setBasket(basket.filter((x) => x._id !== id));
  };

  const increaseBasket = (id) => {
    const index = basket.findIndex((x) => x._id === id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    }
  };

  const decreaseBasket = (id) => {
    const index = basket.findIndex((x) => x._id === id);
    if (index !== -1 && basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  };

  const totalBasket = (id) => {
    return basket.reduce((prev, next) => prev + next.count * next.price, 0);
  };

  const data = {
    basket,
    addBasket,
    deleteBasket,
    increaseBasket,
    decreaseBasket,
    totalBasket,
  };
  return (
    <basketContext.Provider value={data}>{children}</basketContext.Provider>
  );
}

export default BasketProvider;
