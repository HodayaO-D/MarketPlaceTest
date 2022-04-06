import React  from "react";
import classes from "./Header.module.css";
import Cart from "../cart/Cart";
import Profile from "../menu/Profile";
import zapLogo from "../../assets/images/zapLogo.png";
import Menu from "../menu/Menu";
import { Search } from 'semantic-ui-react'

const Header = (props) => {

  return (
    <header className={classes["header_top"]}>
      <div className={classes["container"]}>
        <div className={classes["left"]}>
          <div className={classes["margin"]}>
            <img className={classes["logo_img"]} src={zapLogo} alt=""/>
          </div>
          <div className={classes["margin"]}>
            <h2>Market Place</h2>
          </div>
          <div className={classes["margin"]}>
          <Menu />
          </div>
        </div>
        <div className={classes["center"]}>
        <Search
          placeholder='Search...'
        />
        </div>
        <div className={classes["right"]}>
          <Profile />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
