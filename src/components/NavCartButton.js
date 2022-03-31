import React from "react";
import CartIcon from "./CartIcon";
import classes from "./NavCartButton.module.css";
import { useNavigate } from "react-router-dom";

const NavCartButton = () => {
  let history = useNavigate();

  const cartShow = () => {
    // history("/cart");

    console.log("clicked");
  };

  return (
    <button onClick={cartShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default NavCartButton;
