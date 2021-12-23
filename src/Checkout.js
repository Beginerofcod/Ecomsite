import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://image.shutterstock.com/image-photo/online-ecommerce-shopping-checkout-on-260nw-1977696398.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Shooping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
