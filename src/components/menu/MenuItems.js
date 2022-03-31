import React, { Component, useState } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const MenuItems = (props) => {
  const [activeItem, setActiveItem] = useState("Product");
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
    props.onSelectItem();
    if (name === "Product") {
      goPdp();
    }else if (name === "Checkout"){
      goOrderProggress();
    }else if (name === "Cart"){
      goToCartItems();
    }
  };

  const goPdp = () => {
    navigate("/", { replace: true });
  };

  const goOrderProggress = () => {
    navigate("/OrderProgress", { replace: true });
  };

  const goToCartItems=()=>{
    navigate("/CartItems", { replace: true });
  }
  return (
    <Menu vertical>
      <Menu.Item
        name="Product"
        active={activeItem === "Product"}
        onClick={handleItemClick}
      >
        <Label color="teal">1</Label>
        Product
      </Menu.Item>

      <Menu.Item
        name="Checkout"
        active={activeItem === "Checkout"}
        onClick={handleItemClick}
      >
        <Label>51</Label>
        Checkout
      </Menu.Item>
      <Menu.Item
        name="Cart"
        active={activeItem === "Cart"}
        onClick={handleItemClick}
      >
        <Label>51</Label>
        My Cart
      </Menu.Item>
      <Menu.Item
        name="Profile"
        active={activeItem === "Profile"}
        onClick={handleItemClick}
      >
        <Label>1</Label>
        Profile
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu>
  );
};

export default MenuItems;
