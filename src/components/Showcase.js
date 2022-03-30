import React, { useState } from "react";
import { data } from "./data";
import Nav from "./Nav";
import Footer from "./Footer";
import classes from "./Showcase.module.css";

const Showcase = () => {
  const [showData, setShowData] = useState(data);

  console.log(showData);

  return (
    <div>
      <Nav />
      <div className={classes.details}>
        <h2>Make a pick</h2>
        <input type="search" placeholder="Search" />
      </div>
      <div className={classes.parent}>
        {showData.map((show) => {
          return (
            <div key={show.id} className={classes.showcase}>
              <div>
                <img src={show.img} alt={show.category} />
                <div className={classes.showcase_texts}>
                  <h3>{show.category}</h3>
                  <p>{show.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
