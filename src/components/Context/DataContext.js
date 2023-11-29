import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

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

            return (
                <DataContext.Provider value={{ data, loading, cart, setCart }}>
                    {children}
                </DataContext.Provider>
            );
        };

export default DataProvider;
