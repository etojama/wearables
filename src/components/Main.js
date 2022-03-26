import React from "react";
import classes from "./Main.module.css";
import mens from "../img/men-8.jpg";
import menpix from "../img/men-5.jpg";
import womenpix from "../img/women-4.jpg";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.main_showcase}>
        <div className={classes.main_text}>
          <h1>Wearables.</h1>
          <h3>Clothes that fits</h3>
        </div>
        <img src={mens} alt="men" />
      </div>

      <button>Explore Items</button>

      <div className={classes.sect}>
        <h3>We've got you sorted!</h3>
        <div className={classes.section}>
          <div className={classes.section_men}>
            <h4>Men</h4>
            <img src={menpix} alt="men pix" />
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={classes.section_women}>
            <h4>Women</h4>
            <img src={womenpix} alt="womenspix" />
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div>ok</div>
    </main>
  );
};

export default Main;
