import { Table } from "react-bootstrap";
import React, { useContext } from "react";
import EventContext from "../../context/EventContext";
import classes from './CartItems.module.css';

const CartItems = (props) => {
  const eventCtx = useContext(EventContext);
  const getImagePath = (imgName) => {
  //  return "images/" + imgName;
  return "https://via.placeholder.com/300/09f/fff.png"
  };
  const tBody = eventCtx.serverAddedProducts.map((e) => {
      return(
    <tr key={e.entry.product.code}>
      <td >
        <img className={classes['img']} src={getImagePath()} alt=""/>
      </td>
      <td>{e.entry.product.name}</td>
      <td>{e.entry.totalPrice.value}</td>
      <td>{e.entry.quantity}</td>
      <td>{e.entry.totalPrice.value * e.entry.quantity}</td>
    </tr>)
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {tBody}       
        </tbody>
      </Table>
    </div>
  );
};
export default CartItems;
