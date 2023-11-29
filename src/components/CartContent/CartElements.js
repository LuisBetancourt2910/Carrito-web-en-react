import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./CartContent.css";

import React from "react";

const CartElements = () => {
  const { cart } = useContext(DataContext);
  return cart.map((product) =>{
    return (
      <div className="cardContent" key={product.id}>
        <img src={product.img} alt="product-card" />
        <h3 className="name">{product.name}</h3>
        <h4 className="price">{product.price}$</h4>
      </div>
    );
  }
  );
}

export default CartElements;