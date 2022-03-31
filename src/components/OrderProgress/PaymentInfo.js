import React, { Fragment, Component, useReducer } from "react";
import { Form, Button } from "semantic-ui-react";

const fNameReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const lNameReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const cardOwnerReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const cardNbrReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const cardValidReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const cvvReducer = (state, action) => {
  return { isValid: true, value: action.value };
};

const PaymentInfo = (props) => {
  const defaultInputValue = (valueFromParent) => {
    return { isValid: valueFromParent !== "", value: valueFromParent };
  };
  const [fNameState, dispatchFName] = useReducer(
    fNameReducer,
    defaultInputValue(props.savedValues.firstName)
  );
  const [lNameState, dispatchLName] = useReducer(
    lNameReducer,
    defaultInputValue(props.savedValues.lastName)
  );
  const [cardOwnerState, dispathCardOwner] = useReducer(
    cardOwnerReducer,
    defaultInputValue(props.savedValues.cardOwnerId)
  );
  const [cardNbrState, dispatchCardNbr] = useReducer(
    cardNbrReducer,
    defaultInputValue(props.savedValues.cardNumber)
  );
  const [cardValidThruState, dispatchCardValid] = useReducer(
    cardValidReducer,
    defaultInputValue(props.savedValues.carValidThru)
  );
  const [cvvState, dispatchCvv] = useReducer(
    cvvReducer,
    defaultInputValue(props.savedValues.cvv)
  );

  const onBackHandler = () => {
    props.onBack();
  };
  const onNextHandler = () => {
    props.onNext({
      firstName: fNameState.value,
      lastName: lNameState.value,
      cardOwnerId: cardOwnerState.value,
      cardNumber: cardNbrState.value,
      carValidThru: cardValidThruState.value,
      cvv: cvvState.value,
    });
  };

  const fNameOnChangeHandler = (event) => {
    dispatchFName({ value: event.target.value });
  };

  const lNameOnChangeHandler = (event) => {
    dispatchLName({ value: event.target.value });
  };

  const cardOwnerIdOnChangeHandler = (event) => {
    dispathCardOwner({ value: event.target.value });
  };

  const cardNbrOnChangeHandler = (event) => {
    dispatchCardNbr({ value: event.target.value });
  };

  const validThruOnChangeHandler = (event) => {
    dispatchCardValid({ value: event.target.value });
  };

  const cvvOnChangeHandler = (event) => {
    dispatchCvv({ value: event.target.value });
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            placeholder="First name"
            onChange={fNameOnChangeHandler}
            value={fNameState.value}
          />
          <Form.Input
            fluid
            label="Last name"
            placeholder="Last name"
            onChange={lNameOnChangeHandler}
            value={lNameState.value}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Card owner id"
            placeholder="Card owner id"
            type="number"
            onChange={cardOwnerIdOnChangeHandler}
            value={cardOwnerState.value}
          />
          <Form.Input
            fluid
            label="Card number"
            placeholder="Card number"
            type="number"
            onChange={cardNbrOnChangeHandler}
            value={cardNbrState.value}
          />
          <Form.Input
            fluid
            label="Valid thru"
            placeholder="Valid thru"
            type="date"
            onChange={validThruOnChangeHandler}
            value={cardValidThruState.value}
          />
          <Form.Input
            fluid
            label="CVV"
            placeholder="CVV"
            type="number"
            onChange={cvvOnChangeHandler}
            value={cvvState.value}
          />
        </Form.Group>
      </Form>
      <div>
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
            content="Next"
            icon="right arrow"
            labelPosition="right"
          />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default PaymentInfo;
