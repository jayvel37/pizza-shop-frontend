import './App.css';
import React, {createContext, useState, useEffect} from "react";
import toppingPage from "./Components/toppings/ToppingPage";
import ToppingTable from "./Components/toppings/ToppingTable";
import ToppingPage from "./Components/toppings/ToppingPage";
import PizzaPage from "./Components/pizzas/PizzaPage";
import AdminPage from "./Components/adminPage/AdminPage";
import SignUpPage from "./Components/signUpPage/SignUpPage";

function App() {
    return (
        <div>
            <SignUpPage/>
        </div>
    );
}

export default App;