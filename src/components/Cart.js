import React from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Mendressing", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.88</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--close"]}>Close</button>
        <button className={classes["button--order"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
