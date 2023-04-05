import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  const handleAddToCart = (product) => {
    const newCart = [...cartItem, product];
    setCartItem(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop__container">
      <div className="products__container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart__container">
        <Cart cartItem={cartItem} />
      </div>
    </div>
  );
};

export default Shop;
