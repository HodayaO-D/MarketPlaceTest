import React, { useContext } from "react";
// import { Badge } from 'react-bootstrap';
import Badge from "./Badge";
import { Button } from "semantic-ui-react";
import classes from "./Cart.module.css";
import EventContext from "../../context/EventContext";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const eventCtx = useContext(EventContext);
  const navigate = useNavigate();

  
  const goOrderProggress = () => {
    navigate("/OrderProgress", { replace: true });
  };
  const goToCartItems=()=>{
    navigate("/CartItems", { replace: true });
  }
  return (
    <div className={classes.cart}>
      <Button circular icon="cart" onClick={goToCartItems}>
      </Button>
      <Badge badgeNbr={eventCtx.ordersList.length} />

    </div>
  );
};

export default Cart;
