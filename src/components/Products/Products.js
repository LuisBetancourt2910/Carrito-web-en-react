import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useContext(DataContext);
  
  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return data.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>Agregar al Carrito</button>
      </div>
  ));
};


export default Products;
