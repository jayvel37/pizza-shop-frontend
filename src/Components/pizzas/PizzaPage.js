import React, {createContext, useState, useEffect} from "react";

import './PizzaPage.css';
import PizzaTable from './PizzaTable';
import AddPizzaModal from "./AddPizzaModal";
import axios from "axios";
function PizzaPage() {
    const [openModal, setOpenModal] = useState(false);
    const [pizzas, setPizzas] = useState([]);

    const [pizzaToEdit, setPizzaToEdit] = useState(null);
    const handleDeleteRow = (targetIndex) => {
       removePizza(pizzas[targetIndex])
    };

    const handleEditRow = (idx) => {
        setPizzaToEdit(idx);
        setOpenModal(true);
    }

    const handleSubmit = (newPizza) => {
        if (pizzaToEdit === null) {
            addPizza(newPizza)
        } else {
            editPizza(pizzas[pizzaToEdit], newPizza)
        }
    };

    function addPizza(Pizza) {
        const URL = "http://18.221.132.40:8000/pizzas/add-pizza/";

        axios.post(URL, Pizza)
            .then((response) => {
                axios.get('http://18.221.132.40:8000/pizzas/get-pizzas/')
                    .then(async (response) => {
                        console.log(response.data);
                        setPizzas(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });

    }

    function removePizza(Pizza){
        const URL = "http://18.221.132.40:8000/pizzas/delete-pizza/";

        axios.delete(URL, {data: Pizza})
            .then((response) => {
                axios.get('http://18.221.132.40:8000/pizzas/get-pizzas/')
                    .then(async (response) => {
                        console.log(response.data);
                        setPizzas(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    function editPizza(oldPizza, newPizza) {
        const URL = "http://18.221.132.40:8000/pizzas/edit-pizza/";

        axios.put(URL, {
            oldPizza: oldPizza["Name"],
            newPizza: newPizza
        })
            .then((response) => {
                axios.get('http://18.221.132.40:8000/pizzas/get-pizzas/')
                    .then(async (response) => {
                        console.log(response.data);
                        setPizzas(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('http://18.221.132.40:8000/pizzas/get-pizzas/')
            .then(async (response) => {
                console.log(response.data)
                setPizzas(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="PizzaPage">
            <PizzaTable pizzas = {pizzas} deleteRow = {handleDeleteRow} editRow = {handleEditRow}/>
            <button className="add-pizza-add-button" onClick={() => setOpenModal(true)}>Add</button>
            { openModal && (
                <AddPizzaModal
                    closeModal = {() => {
                        setOpenModal(false);
                        setPizzaToEdit(null);
                    }}
                    onSubmit = {handleSubmit}
                    defaultValue = {pizzaToEdit !== null && pizzas[pizzaToEdit]}
                />
            )}
        </div>
    );
}

export default PizzaPage;