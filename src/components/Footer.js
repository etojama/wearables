import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <h2>Shop with us</h2>
        <button>Shop now</button>
      </footer>
      <p className={classes.text}>Copyright &copy; 2022, Etoro</p>
    </>
  );
};

export default Footer;
