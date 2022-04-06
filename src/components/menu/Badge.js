import classes from "./Badge.module.css";
import { Button } from "semantic-ui-react";

const Badge = (props) => {
  return (
    <div className={classes.badge}>
      <span className={classes.span}>{props.badgeNbr}</span>
    </div>
  );
};

export default Badge;
