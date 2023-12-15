import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import CartElements from './CartElements';
import './CartContent.css';
import Navbar from '../Navbar/Navbar';
import CartTotal from './CartTotal';

const CartContent = () => {
  const { cart } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <div className="cartContent">
        {cart.length === 0 ? (
          <h3>No hay productos en el carrito</h3>
        ) : (
          <>
            <CartElements />
            <CartTotal />
          </>
        )}
      </div>
    </>
  );
};

export default CartContent;
