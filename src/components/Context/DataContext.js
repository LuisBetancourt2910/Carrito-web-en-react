import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(savedCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        axios("data.json")
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const buyProducts = (product) => {
        setCart(prevState => {
            const productRepeated = prevState.find((item) => item.id === product.id);
            if (productRepeated) {
                return prevState.map(item => item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item);
            } else {
                return [...prevState, { ...product, quanty: 1 }];
            }
        });
    };

    return (
        <DataContext.Provider value={{ data, loading, cart, buyProducts, setCart }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
