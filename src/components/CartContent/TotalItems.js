import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

const TotalItems = () => {
    const { cart } = useContext(DataContext); // Cambié dataContext a DataContext
    const itemsQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <span className='cart-item-total'>{itemsQuantity}</span>
    );
}

export default TotalItems;
