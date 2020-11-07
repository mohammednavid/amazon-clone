import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValues } from "./ServiceProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValues();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
        />
        <div className="checkout__title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Cart</h2>
          {basket.map((items) => (
            <CheckoutProduct
              key={items.id}
              id={items.id}
              img={items.img}
              title={items.title}
              rating={items.rating}
              price={items.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
