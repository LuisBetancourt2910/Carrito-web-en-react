import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import CartElements from './CartElements';
import './CartContent.css';
import CartTotal from './CartTotal';

const CartContent = () => {
  const { cart } = useContext(DataContext);


  if (cart.length === 0) {
    return (
      <div className="cartContent">
        <h3>No hay productos en el carrito</h3>
      </div>
    );
  }
  return (
    <div>
      <CartElements />
      <CartTotal />
    </div>
  );
};

export default CartContent;
