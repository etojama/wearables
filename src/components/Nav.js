import React, { useState } from "react";
import classes from "./Nav.module.css";
import { useNavigate } from "react-router-dom";
import NavCartButton from "./NavCartButton";
import { Link } from "react-router-dom";

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
          {/* <a href="#category">Category</a> */}
          <Link to="/category">Category</Link>
        </li>

        <li onClick={handleStoreClick}>
          <a href="#">Store</a>{" "}
        </li>
        <NavCartButton />
      </ul>
    </div>
  );
};

export default Nav;
