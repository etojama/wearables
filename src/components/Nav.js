import React, { useState } from "react";
// import classes from "./Nav.module.css";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import NavCartButton from "./NavCartButton";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [store, setStore] = useState(false);

  let history = useNavigate();

  const handleStoreClick = (e) => {
    history("/showcase");

    console.log("store clicked");
  };

  return (
    <div className="nav">
      <h2>Wearables</h2>
      <ul className="nav_ul">
        <li>
          <NavLink to="/category">Category</NavLink>
        </li>

        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <NavCartButton />
      </ul>
    </div>
  );
};

export default Nav;
