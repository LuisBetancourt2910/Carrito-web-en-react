import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";

import React from "react";

const CartElements = () => {
  const { cart, setCart } = useContext(DataContext);

  const deleteProduct = (id) => {
    const deleteProduct = cart.filter((item) => item.id !== id);
    setCart(deleteProduct);
  };
  return cart.map((product) => {
    return (
      <div className="cardContent" key={product.id}>
        <img src={product.img} alt="product-card" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} quanty={product.quanty} />
        <h4 className="price">{product.price * product.quanty}$</h4>
        <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>✖️</h3>
      </div>
    );
  }
  );
}

export default CartElements;