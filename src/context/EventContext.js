import React, { useState } from "react";

const EventContext = React.createContext({
  ordersList: [],
  onBuy: () => {},
  user: {cart:{}}
});

export const eNavigate = {
  Product: 1,
  OrderProggress: 2,
};

export const EventContextProvider = (props) => {
  const [ordersList, setOrdersList] = useState([]);

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
        onBuy: onBuyHandler,
        user: {cart:{}}
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContext;
