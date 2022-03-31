import React, { Fragment } from "react";
import ProductBaseDetails from "./ProductBaseDetails.js";
import ProductPayBox from "./ProductPayBox.js";
import ProductFullDetails from "./ProductFullDetails.js";
import classes from "./Pdp.module.css";
import { Card } from "semantic-ui-react";

const Pdp = (props) => {
  return (
    <React.Fragment>
      <div className={classes["side-by-side"]}>
        <div className={classes.left}>
          <ProductBaseDetails product={props.product} />
        </div>
        <div className={classes.right}>
          <ProductFullDetails
            product={props.product}
            shippingMethod={props.shippingMethod}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Pdp;
