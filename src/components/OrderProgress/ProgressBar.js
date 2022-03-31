import classes from "./ProgressBar.module.css";
import Badge from "react-bootstrap/Badge";
import { Icon, Step } from "semantic-ui-react";

const ProgressBar = (props) => {  
  
  const isActive = (stepIndx)=>{
    return props.progressIndex === stepIndx;
  }

  const isDisabled = (stepIndex)=>{
    return props.progressIndex < stepIndex;
  }

  const sementicUI = (
    <Step.Group>
      <Step active={isActive(1)}>
        <Icon name="address book" />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
      <Step active={isActive(2)} disabled={isDisabled(2)}>
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
      <Step active={isActive(3)} disabled={isDisabled(3)}>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
  return <div>{sementicUI}</div>;
};

export default ProgressBar;
