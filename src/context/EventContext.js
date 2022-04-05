import { ThemeContext } from "@emotion/react";
import React, { useState } from "react";
import * as apiManager from "../api/apiManager";

const EventContext = React.createContext({
  ordersList: [],
  onBuy: () => {},
  user: { cart: {} },
  createAnonymouseCartForUser: () => {},
});

export const eNavigate = {
  Product: 1,
  OrderProggress: 2,
};

export const EventContextProvider = (props) => {
  const [ordersList, setOrdersList] = useState([]);
  const [user, setUser] = useState();

  const onBuyHandler = (order) => {
    addOrder(order);
  };

  const addOrder = (order) => {
    addOrderToCart(order);
    setOrdersList((prev) => {
      return [...prev, order]; //prev.concat(order);
    });
  };

  const addOrderToCart = (order) => {
    debugger;
    if (!user || !user.cart) {
      createAnonymouseCartForUser()
        .then((res) => addItemToCart(order.product.id))
        .catch((err) => {
          debugger;
          console.log(`error: ${err.message}`);
        });
    }else{
      addItemToCart(order.product.id)
      .catch((err) => {
        debugger;
        console.log(`error: ${err.message}`);
      });
    }
  };

  function createAnonymouseCartForUser() {    
    return apiManager.createAnonymouseCart().then((res) => {
      debugger;
      setUser((prevState) => {
        const newUser = {
          ...prevState,
          cart:res,
        };
        console.log(`new user: ${newUser}`);
        return newUser;
      });
      return res;
      // resolve(res);
    });
  }

  function addItemToCart(productId) {
    debugger;
    return apiManager
      .addItemToCart({ productId: /*productId*/824267, cartGuid: user.cart.guid })
      .then((res) => console.log(`back from apiManager.addItemToCart res: ${JSON.stringify(res)}`));
  }

  return (
    <EventContext.Provider
      value={{
        ordersList: ordersList,
        onBuy: onBuyHandler,
        user: user,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContext;
