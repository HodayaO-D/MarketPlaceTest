import React, { useContext } from "react";
// import { Badge } from 'react-bootstrap';
import Badge from "./Badge";
import { Button } from "semantic-ui-react";
import classes from "./Cart.module.css";
import EventContext from "../../context/EventContext";
import { useNavigate } from "react-router-dom";
import {CartItemsUrl} from '../../Routs.js';

const Cart = (props) => {
  const eventCtx = useContext(EventContext);
  const navigate = useNavigate();

 
  const goToCartItems=()=>{
    navigate(CartItemsUrl, { replace: true });
  }
  return (
    <div className={classes.cart}>
      <Button circular icon="cart" onClick={goToCartItems}>
      </Button>
      <Badge badgeNbr={eventCtx.serverAddedProducts.length} />

    </div>
  );
};

export default Cart;
