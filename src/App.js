import './App.css';
import React, {createContext, useState, useEffect} from "react";
import toppingPage from "./Components/toppings/ToppingPage";
import ToppingTable from "./Components/toppings/ToppingTable";
import ToppingPage from "./Components/toppings/ToppingPage";
import PizzaPage from "./Components/pizzas/PizzaPage";

function App() {
    return (
        <div>
            <PizzaPage/>
        </div>
    );
}

export default App;