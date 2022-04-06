import React, {  useContext, useState } from "react";
import ProgressBar from "./ProgressBar";
import ShipingAddress from "./ShipingAddress";
import PaymentInfo from "./PaymentInfo";
import OrderReview from "./OrderReview";
import OrderDoneSuccess from "./OrderDoneSuccess";
import classes from "./OrderProgress.module.css";
import { Card } from "semantic-ui-react";
import EventContext from "../../context/EventContext";

const OrderProgress = (props) => {
  const eventCtx = useContext(EventContext);
  console.log("event context order list: " + eventCtx.ordersList);
  const [currentProgressNumber, setCurrentProgressNumber] = useState(1);
  const [orderNumber, setOrderNumber] = useState(
    (Math.random() * 10000).toFixed(0)
  );
  const [filledShippingAddress, setFilledShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    City: "",
    postcode: "",
  });

  const [filledPaymentInfo, setPaymentInfo] = useState({
    firstName: "",
    lastName: "",
    cardOwnerId: "",
    cardNumber: "",
    carValidThru: "",
    cvv: "",
  });

  const safeSetCurrentProgressNumber = (value) => {
    setCurrentProgressNumber((prev) => {
      return prev + value;
    });
  };

  const onNextHandler = (enteredObj) => {
    getObjectFromComponent(enteredObj, currentProgressNumber);
    safeSetCurrentProgressNumber(1);
  };

  const onBackHandler = () => {
    safeSetCurrentProgressNumber(-1);
  };

  const getObjectFromComponent = (obj, fromComponent) => {
    switch (fromComponent) {
      case 1:
        setFilledShippingAddress(obj);
        break;
      case 2:
        setPaymentInfo(obj);
        break;
      case 3:
        break;
    }
  }; 

  let levelContent;
  switch (currentProgressNumber) {
    case 1:
      levelContent = (
        <ShipingAddress
          onNext={onNextHandler}
          savedValues={filledShippingAddress}
        />
      );
      break;
    case 2:
      levelContent = (
        <PaymentInfo
          onNext={onNextHandler}
          savedValues={filledPaymentInfo}
          onBack={onBackHandler}
        />
      );
      break;
    case 3:
      levelContent = (
        <OrderReview
          orderDetails={{
            product: eventCtx.ordersList[0].product, 
            order: {
              shippingMethod: { ...eventCtx.ordersList[0].shippingMethod },
              orderNumber: orderNumber,
              shippingAddress: filledShippingAddress,
              paymentInfo: filledPaymentInfo,
            },
          }}
          onNext={onNextHandler}
          onBack={onBackHandler}
        />
      );
      break;
    case 4:
      levelContent = <OrderDoneSuccess orderNumber={orderNumber} />;
      break;
    default:
      <div>page not found</div>;
  }

  return (
    <React.Fragment>
      <div className={classes.content}>
        <Card.Group>
          <Card fluid color="green">
            <Card.Content>
              <ProgressBar progressIndex={currentProgressNumber} />
              {levelContent}
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </React.Fragment>
  );
};
export default OrderProgress;
