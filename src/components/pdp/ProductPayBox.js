import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const defaultShippingMethod = { isValid: false, shippingMethod: {} };

const ProductPayBox = (props) => {

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
      methodId: +event.target.id,
    });
  };

  const onBuyBtnClickHandler = () => {  
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
      <h3>לרכישה - בחר שיטת שילוח</h3>
      <div>{shippingMethodHtml}</div>    
      <Button
        variant="success"
        onClick={onBuyBtnClickHandler}
        disabled={!shippingMethod.isValid}
      >
        הוסף לעגלה
      </Button>
    </div>
  );
};

export default ProductPayBox;
