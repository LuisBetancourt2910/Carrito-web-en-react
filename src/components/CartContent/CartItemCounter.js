import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartItemCounter = ({ product, quanty }) => {
    const { cart, setCart, buyProducts } = useContext(DataContext);

    const decrease = () => {
        const productRepeated = cart.find((item) => item.id === product.id);

        if (productRepeated && productRepeated.quanty > 1) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quanty: item.quanty - 1 } : item));
        }
    }

    return (
        <>
            <p className='counter-button' onClick={decrease}>-</p>
            <p>{quanty}</p>
            <p className='counter-button' onClick={() => buyProducts(product)}> +</p>
        </>
    );
}

export default CartItemCounter;
