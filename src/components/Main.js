import React from "react";
import classes from "./Main.module.css";
import mens from "../img/men-8.jpg";
import menpix from "../img/men-5.jpg";
import womenpix from "../img/women-4.jpg";
import childpix from "../img/child-1.jpg";
import countryWide from "../img/Country-wide.png";
import freeShipping from "../img/free-shipping.png";
import quality from "../img/top-quality.png";
import returnPolicy from "../img/return-policy.png";
import Footer from "./Footer";
import Nav from "./Nav";

const Main = () => {
  return (
    <>
      <Nav />
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
            <div className={classes.section_men}>
              <h4>Kids</h4>
              <img src={childpix} alt="child pix" />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.exp}>
          <h2>We offer the best experiences</h2>
          <div className={classes.experience}>
            <div className={classes.experience_quality}>
              <img src={quality} alt="top policy" />
              <p>Top Quality</p>
            </div>
            <div className={classes.experience_delivery}>
              <img src={countryWide} alt="country wide delivery" />
              <p>Country Wide Delivery</p>
            </div>
            <div className={classes.experience_ship}>
              <img src={freeShipping} alt="free shipping" />
              <p>Free Shipping</p>
            </div>
            <div className={classes.experience_policy}>
              <img src={returnPolicy} alt="Return policy" />
              <p>30 Day Return Policy</p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Main;
