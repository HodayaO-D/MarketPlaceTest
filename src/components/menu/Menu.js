import classes from "./Menu.module.css";
import "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "./MenuItems";
import React, { useState } from "react";

const Menu = (props) => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  const style = `${classes["menu_items"]} ${
    showMenuItems ? classes.visible : classes.hidden
  }`;

  const onMenuIconClickHandler = () => {
    setShowMenuItems((prev)=>{
return !prev;
    })
  };
  return (
    <div>
      <MenuIcon onClick={onMenuIconClickHandler} />
      <div className={style}>
        <MenuItems onSelectItem={onMenuIconClickHandler}/>
      </div>
    </div>
  );
};

export default Menu;
