import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <h2>Wearables</h2>
      <ul className={classes.nav_ul}>
        <li>
          <a href="#category">Category</a>{" "}
        </li>
        <li>
          <a href="#store">Store</a>{" "}
        </li>
        <li>
          <a href="#cart">Cart</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
