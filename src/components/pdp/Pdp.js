import React from "react";
import ProductBaseDetails from "./ProductBaseDetails";
import ProductFullDetails from "./ProductFullDetails";
import classes from "./Pdp.module.css";

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
