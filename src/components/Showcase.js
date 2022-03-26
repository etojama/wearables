import React, { useState } from "react";
import { data } from "./data";
import classes from "./Showcase.module.css";

const Showcase = () => {
  const [showData, setShowData] = useState(data);

  console.log(showData);

  return (
    <div>
      Showcase
      {showData.map((show) => {
        return (
          <div key={show.id} className={classes.showcase}>
            <h3>{show.category}</h3>
            <img src={show.img} alt={show.category} />
            <p>{show.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;
