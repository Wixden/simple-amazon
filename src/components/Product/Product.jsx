import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <div className="product__image">
        <img src={img} alt={name} />
      </div>
      <div className="product__info">
        <div>
          <h6 className="product__name">{name}</h6>
          <p className="product__price">Price: ${price}</p>
        </div>
        <div className="product__seller">
          <p>Seller: {seller}</p>
          <p>Ratings: {ratings} Stars</p>
        </div>
      </div>
      <div className="add__to__cart">
        <button
          className="add__to__cart__btn"
          onClick={() => handleAddToCart(props.product)}
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
