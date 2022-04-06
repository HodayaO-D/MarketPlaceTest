import { Table } from "react-bootstrap";
import React, { useContext } from "react";
import EventContext from "../../context/EventContext";
import classes from './CartItems.module.css';

const CartItems = (props) => {
  const eventCtx = useContext(EventContext);
  const getImagePath = (imgName) => {
   return "images/" + imgName;
  };

  const quantity = 1;
  const tBody = eventCtx.ordersList.map((e) => {
      return(
    <tr>
      <td >
        <img className={classes['img']} src={getImagePath(e.product.imageName)} />
      </td>
      <td>{e.product.name}</td>
      <td>{e.product.price}</td>
      <td>{quantity}</td>
      <td>{e.product.price * quantity}</td>
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
            {/* <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td> */}
        </tbody>
      </Table>
    </div>
  );
};
export default CartItems;
