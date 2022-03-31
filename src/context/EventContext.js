import React, { useState, useEffect } from "react";

const EventContext = React.createContext({
  ordersList: [],
  onBuy: () => {},
  onNavigate: () => {},
});

export const eNavigate = {
  Product: 1,
  OrderProggress: 2,
};

export const EventContextProvider = (props) => {
  const [ordersList, setOrdersList] = useState([]);
  // useEffect(() => {
  //   const storedOrdersList = localStorage.getItem("ordersList");
  //   if (storedOrdersList) {
  //     setOrdersList(storedOrdersList);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("ordersList", ordersList);
  // }, [ordersList]);

  const onBuyHandler = (order) => {
    addOrder(order);
  };

  const addOrder = (order) => {
    setOrdersList((prev) => {
      return [...prev, order]; //prev.concat(order);
    });
  };

 
  return (
    <EventContext.Provider
      value={{
        ordersList: ordersList,
        onBuy: onBuyHandler
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContext;
