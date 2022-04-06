import React from "react";
import {  Button } from "semantic-ui-react";
import classes from "./OrderReview.module.css";
import { Message, Grid } from "semantic-ui-react";
import { Table } from "semantic-ui-react";

const OrderReview = (props) => {
  console.table(props.orderDetails);
  const onBackHandler = () => {
    props.onBack();
  };
  const onNextHandler = () => {
    props.onNext();
  };

  const table = (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{props.orderDetails.product.name}</Table.Cell>
          <Table.Cell>{props.orderDetails.product.price}</Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>Subtotal</Table.Cell>
          <Table.Cell>{props.orderDetails.product.price}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Shipping</Table.Cell>
          <Table.Cell>
            {props.orderDetails.order.shippingMethod.methodName} -{" "}
            {props.orderDetails.order.shippingMethod.price}
          </Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>Total</Table.Cell>
          <Table.Cell>
            {props.orderDetails.order.shippingMethod.price +
              props.orderDetails.product.price}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Note</Table.Cell>
          <Table.Cell>new order</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const paymentInfo = (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Payment Info</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Card number</Table.Cell>
          <Table.Cell>
            {props.orderDetails.order.paymentInfo.cardNumber}
          </Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>Card owner id</Table.Cell>
          <Table.Cell>
            {props.orderDetails.order.paymentInfo.cardOwnerId}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>valid thru</Table.Cell>
          <Table.Cell>
            {props.orderDetails.order.paymentInfo.carValidThru}
          </Table.Cell>
        </Table.Row>
        <Table.Row active>
          <Table.Cell>cvv</Table.Cell>
          <Table.Cell>{props.orderDetails.order.paymentInfo.cvv}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const orderDetails = (
    <Grid columns={5} divided>
      <Grid.Row>
        <Grid.Column>Order Number</Grid.Column>
        <Grid.Column>DATE</Grid.Column>
        <Grid.Column>EMAIL</Grid.Column>
        <Grid.Column>TOTAL</Grid.Column>
        <Grid.Column>PAYMENT METHOD</Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>{props.orderDetails.order.orderNumber}</Grid.Column>
        <Grid.Column>{new Date().toDateString()}</Grid.Column>
        <Grid.Column>
          {props.orderDetails.order.shippingAddress.email}
        </Grid.Column>
        <Grid.Column>
          {props.orderDetails.order.shippingMethod.price +
            props.orderDetails.product.price}
        </Grid.Column>
        <Grid.Column>Credit Card</Grid.Column>
      </Grid.Row>
    </Grid>
  );
  return (
    <React.Fragment>
      <div className={classes.space}>
        <Message
          header={`Thank you ${props.orderDetails.order.shippingAddress.firstName} ${props.orderDetails.order.shippingAddress.lastName}!`}
          content="Your order has been received."
        />
      </div>
      <div className={classes.space}>{orderDetails}</div>
      <div className={`${classes["side-by-side"]}`}>
        <div className={classes.right}>
          <div>{paymentInfo}</div>
        </div>
        <div className={classes.left}>
          <div>{table}</div>
        </div>
      </div>
      <div className={classes.space}>
        {
          <footer>
            <Button
              onClick={onBackHandler}
              content="Back"
              icon="left arrow"
              labelPosition="left"
            />
            <Button
              positive
              onClick={onNextHandler}
              content="Order"
              icon="right arrow"
              labelPosition="right"
            />
          </footer>
        }
      </div>
    </React.Fragment>
  );
};

export default OrderReview;
