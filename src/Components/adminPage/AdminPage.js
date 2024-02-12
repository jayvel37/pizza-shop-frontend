import "./AdminPage.css"
import ToppingPage from "../toppings/ToppingPage";
import PizzaPage from "../pizzas/PizzaPage";
import React from "react";


function Admin() {
    return (
        <div>
            <h1 className="header">Admin page. Scroll below to see both tables.</h1>
            <div>
                <ToppingPage/>
            </div>
            <div>
                <PizzaPage/>
            </div>
        </div>
    );
}

export default Admin;