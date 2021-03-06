import React, { Fragment } from "react";
import ProductImage from './ProductImage.js';
import classes from './ProductBaseDetails.module.css';

const ProductBaseDetails = (props) => {
  return(
  <React.Fragment>
    <div>
      <ProductImage imageName={props.product.imageName}/>
    </div>   
    <div>
      <p className={classes.description}>{props.product.shortDesciption}</p>
    </div>
  </React.Fragment>);
};

export default ProductBaseDetails;
