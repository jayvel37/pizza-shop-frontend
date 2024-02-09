import React, {createContext, useState, useEffect} from "react";

import './ToppingPage.css';
import ToppingTable from './ToppingTable';
import AddToppingModal from "./AddToppingModal";
import axios from "axios";
function ToppingPage() {
    const [openModal, setOpenModal] = useState(false);
    const [toppings, setToppings] = useState([]);

    const [toppingToEdit, setToppingToEdit] = useState(null);
    const handleDeleteRow = (targetIndex) => {
        removeTopping(toppings[targetIndex])
    };

    const handleEditRow = (idx) => {
        setToppingToEdit(idx);
        setOpenModal(true);
    }

    const handleSubmit = (newTopping) => {
        if(toppingToEdit === null) {
            addTopping(newTopping)
        } else {
            editTopping(toppings[toppingToEdit], newTopping)
        }
    };

    function addTopping(topping) {
        const URL = "http://localhost:8000/toppings/add-topping/";

        axios.post(URL, {
            Topping: topping
        })
            .then((response) => {
                axios.get('http://localhost:8000/toppings/get-toppings/')
                    .then(async (response) => {
                        setToppings(response.data.Toppings);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });

    }

    function removeTopping(topping){
        const URL = "http://localhost:8000/toppings/delete-topping/";

        axios.delete(URL, {data:{Topping:topping}})
            .then((response) => {
                axios.get('http://localhost:8000/toppings/get-toppings/')
                    .then(async (response) => {
                        setToppings(response.data.Toppings);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    function editTopping(oldTopping, newTopping) {
        const URL = "http://localhost:8000/toppings/edit-topping/";

        axios.put(URL, {
            oldTopping: oldTopping,
            newTopping: newTopping
        })
            .then((response) => {
                axios.get('http://localhost:8000/toppings/get-toppings/')
                    .then(async (response) => {
                        setToppings(response.data.Toppings);
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
        axios.get('http://localhost:8000/toppings/get-toppings/')
            .then(async (response) => {
                setToppings(response.data.Toppings);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="ToppingPage">
            <ToppingTable toppings = {toppings} deleteRow = {handleDeleteRow} editRow = {handleEditRow}/>
            <button className="add-topping-add-button" onClick={() => setOpenModal(true)}>Add</button>
            { openModal && (
                <AddToppingModal
                    closeModal = {() => {
                        setOpenModal(false);
                        setToppingToEdit(null);
                }}
                    onSubmit = {handleSubmit}
                    defaultValue = {toppingToEdit !== null && toppings[toppingToEdit]}
                />
            )}
        </div>
    );
}

export default ToppingPage;