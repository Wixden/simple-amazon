import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  // const cartItem = props.cartItem; //Option 2
  // const { cartItem } = props; //Option 3

  let total = 0;
  let totalShipping = 0;
  for (const product of cartItem) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const totalTax = (total * 7) / 100;
  const grandTotal = total + totalShipping + totalTax;

  return (
    <div>
      <h2 className="order__summary">Order Summary:</h2>
      <div className="cart__info">
        <p>
          <span>Selected Item:</span> <span>{cartItem.length}</span>
        </p>
        <p>
          <span>Total Price: </span> <span>${total}</span>
        </p>
        <p>
          <span> Total Shipping:</span> <span>{totalShipping}</span>
        </p>
        <p>
          <span>Tax: </span>
          <span>${totalTax}</span>
        </p>
        <p>
          <span> Grand Total:</span> <span>${grandTotal}</span>
        </p>
      </div>
      <div className="cart__btn">
        <button className="clear__cart">
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="review__cart">
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};
import "./Cart.css";

export default Cart;
