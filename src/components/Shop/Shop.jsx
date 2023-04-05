import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../assets/utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   const storedCart = getShoppingCart();

  //   // Get cart product id
  //   for (const id in storedCart) {
  //     // Get product only with matching ids
  //     const savedProduct = products.find((product) => product.id === id);
  //     // Get Product quantity
  //     const quantity = storedCart[id];
  //     // Set/Update product quantity
  //     savedProduct.quantity = quantity;

  //     console.log(savedProduct);
  //   }
  // }, [products]);

  useEffect(() => {
    const storedProduct = getShoppingCart();
    const savedCart = [];

    for (const id in storedProduct) {
      const savedProduct = products.find((product) => product.id === id);
      console.log(savedProduct);

      if (savedProduct) {
        const quantity = storedProduct[id];
        savedProduct.quantity = quantity;
        savedCart.push(savedProduct);
      }
    }
    setCartItem(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cartItem, product];
    setCartItem(newCart);
    addToDb(product.id);
  };

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
