import React, { useState } from "react";
import classes from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [store, setStore] = useState(false);

  let history = useNavigate();

  const handleStoreClick = (e) => {
    history("/showcase");

    console.log("store clicked");
  };

  return (
    <div className={classes.nav}>
      <h2>Wearables</h2>
      <ul className={classes.nav_ul}>
        <li>
          <a href="#category">Category</a>
        </li>

        <li onClick={handleStoreClick}>
          <a href="#">Store</a>{" "}
        </li>
        <li>
          <a href="#cart">Cart</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
