import React, {createContext, useState, useEffect} from "react";
import ToppingList from "./ToppingList";
import AddTopping from "./AddTopping";
import axios from "axios";


export const toppingsContext = createContext();
function ToppingsPage() {
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/toppings/get-toppings/')
            .then(async (response) => {
                setToppings(response.data.Toppings);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <toppingsContext.Provider value={[toppings, setToppings]}>
            <ToppingList/>
            <AddTopping/>
        </toppingsContext.Provider>
    );
}

export default ToppingsPage;