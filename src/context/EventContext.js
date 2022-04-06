import React, { useState } from "react";
import * as apiManager from "../api/apiManager";

const EventContext = React.createContext({
  ordersList: [],
  serverAddedProducts: [],
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
  const [serverAddedProducts, setServerAddedProducts] = useState([]);

  const onBuyHandler = (order) => {
    addOrder(order);
  };

  const addOrder = (order) => {
    addOrderToCart(order);
    setOrdersList((prev) => {
      return [...prev, order];
    });
  };

  const addOrderToCart = (order) => {
    if (!user || !user.cart) {
      createAnonymouseCartForUser()
        .then((res) => addItemToCart(order.product.id, res.guid))
        .catch((err) => {
          debugger;
          console.log(`error: ${err.message}`);
        });
    } else {
      addItemToCart(order.product.id).catch((err) => {
        debugger;
        console.log(`error: ${err.message}`);
      });
    }
  };

  function createAnonymouseCartForUser() {
    return apiManager.createAnonymouseCart().then((res) => {
      setUser((prevState) => {
        const newUser = {
          ...prevState,
          cart: res,
        };
        return newUser;
      });
      return res;
    });
  }

  function addItemToCart(productId, cartGuid) {
    return apiManager
      .addItemToCart({
        productId: /*productId*/ 824267,
        cartGuid: cartGuid ? cartGuid : user.cart.guid,
      })
      .then((res) => {
        if (res.statusCode == "success") {
          setServerAddedProducts((prev) => {
            return [...prev, res];
          });
        }
      });
  }

  return (
    <EventContext.Provider
      value={{
        ordersList: ordersList,
        serverAddedProducts: serverAddedProducts,
        onBuy: onBuyHandler,
        user: user,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContext;
