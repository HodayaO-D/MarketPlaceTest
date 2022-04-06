import classes from "./ProductFullDetails.module.css";
import { Message } from "semantic-ui-react";
import ProductPayBox from "./ProductPayBox";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EventContext from "../../context/EventContext";
import { Card } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import BottomBorderDiv from "../UI/BottomBorderDiv";
import Quantity from "../UI/Quantity";
import { CheckoutUrl} from '../../Routs.js';

const ProductFullDetails = (props) => {
  const eventCtx = useContext(EventContext);
  const navigate = useNavigate();

  const onBuyBtnClickHandler = (shippingMethod) => {
    const order = {
      product: props.product,
      shippingMethod: shippingMethod,
    };
    eventCtx.onBuy(order);
    goToOrderProggress();
  };
  const goToOrderProggress = () => {
     navigate(CheckoutUrl, { replace: true });
  };
  return (
    <div className={classes["right-align"]}>
      <Message size="mini">
        <Card.Group>
          <Card fluid color="green">
            <Card.Content>
              <BottomBorderDiv>
                <h2 className={classes.bold}>{props.product.name}</h2>
                <Rating icon="star" defaultRating={props.product.averageRating} maxRating={5} /> {`(${props.product.numberOfReviews} reviews)`}
                
              </BottomBorderDiv>

              <BottomBorderDiv>
                <h4>{props.product.shortDesciption}</h4>
                <br />
                <p>{props.product.fullDetails}</p>
                <p>{props.product.properies}</p>
                <br />
                <h3 className={classes.bold}>{props.product.price}</h3>
              </BottomBorderDiv>
              <BottomBorderDiv>
                <Quantity /> {`${props.product.stock.stockLevel} available in stock`}
              </BottomBorderDiv>

              <ProductPayBox
                price={props.product.price}
                shippingMethod={props.shippingMethod}
                onBuyBtnClick={onBuyBtnClickHandler}
              />
            </Card.Content>
          </Card>
        </Card.Group>
      </Message>
    </div>
  );
};

export default ProductFullDetails;
