import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import classes from "./Quantity.module.css";

const Quantity = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((state) => {
      return state + 1;
    });
  };

  const handleDecrement = () => {
    setCounter((state) => {
        if (state - 1 < 0)
        return 0;
      return state - 1;
    });
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleIncrement}>+</Button>
      <Button >{counter}</Button>
      <Button onClick={handleDecrement}>-</Button>
    </ButtonGroup>
  );
};

export default Quantity;
