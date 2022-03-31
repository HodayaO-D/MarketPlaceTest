import React, { useReducer, useContext } from "react";
import EventContext from "../context/EventContext";
import classes from "./ProductPayBox.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const defaultShippingMethod = { isValid: false, shippingMethod: {} };

const ProductPayBox = (props) => {
  const eventCtx = useContext(EventContext);

  const shippingMethodReducer = (state, action) => {
    if (action.type === "SHIPPING_METHOD_SELECTED") {
      const method = props.shippingMethod.filter(
        (m) => m.id === action.methodId
      );
      if (method.length > 0) {
        return { isValid: true, shippingMethod: method[0] };
      }
    }

    return defaultShippingMethod;
  };

  const [shippingMethod, dispatchShippingMethod] = useReducer(
    shippingMethodReducer,
    defaultShippingMethod
  );

  const shippingMethodOnSelectHandler = (event) => {
    dispatchShippingMethod({
      type: "SHIPPING_METHOD_SELECTED",
      // methodId: +event.target.value,
      methodId: +event.target.id,
    });
  };

  const onBuyBtnClickHandler = () => {
    const order = {
      // product: props.product,
      shippingMethod: shippingMethod.shippingMethod,
    };
    // eventCtx.onBuy(order);    
    props.onBuyBtnClick(shippingMethod.shippingMethod);
  };
  const shippingMethodHtml = (
    <ul>
      {props.shippingMethod.map((m) => (
        <li key={m.id}>          
          <Form.Check
            type="radio"
            id={m.id}
            label={`${m.methodName} - ${m.price}`}
            name="shipingMethod"
            onChange={shippingMethodOnSelectHandler}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* <h2 className={classes.h2}>Price : {props.price} ש"ח</h2> */}
      <h3>לרכישה - בחר שיטת שילוח</h3>
      <div>{shippingMethodHtml}</div>
      {/* <Link
        to="/OrderProgress"
        params={{
          product: props.product,
          order: { shippingMethod: shippingMethod.shippingMethod },
        }}
      > */}
        <Button
          // className={classes["buy-btn"]}
          variant="success"
          onClick={onBuyBtnClickHandler}
          disabled={!shippingMethod.isValid}
        >
          הוסף לעגלה
        </Button>
      {/* </Link> */}
    </div>
  );
};

export default ProductPayBox;
