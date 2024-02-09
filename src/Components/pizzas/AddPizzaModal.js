import React, {createContext, useState, useEffect} from "react";
import './AddPizzaModal.css';
export const AddPizzaModal = ({ closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(defaultValue || {Name: "", Toppings: []})

    const [errors, setErrors] = useState("")

    const validateForm = () => {
        if (formState.Name && formState.Toppings.length > 0){
            setErrors("")
            return true;
        } else {
            let errorField = [];
            for(const [key, value] of Object.entries(formState)) {
                if (!value || !value.length) {
                    errorField.push(key)
                }
            }
            setErrors(errorField.join(', '))
            return false;
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "Toppings") {

            // Split the input value by space or ", " into an array
            const toppingsArray = value.split(/[ ,]+/);

            // Update the formState with the toppingsArray
            setFormState({ ...formState, [name]: toppingsArray });
        } else {
            // Update formState as usual for other input fields
            setFormState({ ...formState, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Create a new array with filtered values
        const temp = formState.Toppings.filter(x => x.length > 0);

        // Create a new state object with updated Toppings array
        setFormState({ ...formState, Toppings: temp });
        const updatedState = { ...formState, Toppings: temp };

        // Weird behavior: if state updates
        //console.log(updatedState);

        onSubmit(updatedState);
        closeModal();
    };

    return (
        <div className="add-pizzas-modal-container" onClick = {(e) => {
            if(e.target.className === "add-pizzas-modal-container") closeModal();
        }}>
            <div className="add-pizzas-modal">
                <form>
                    <div className="add-pizza-form-group">
                        <label htmlFor="Name">Pizza</label>
                        <input name="Name" onChange={handleChange} value = {formState.Name}/>
                    </div>
                    <div className="add-pizza-form-group">
                        <label htmlFor="Toppings">Toppings</label>
                        <textarea name="Toppings" onChange={handleChange} value = {formState.Toppings}/>
                    </div>
                    {errors && <div className="pizza-error">{`Please include: ${errors}`}</div>}
                    <button type="add" className="add-pizza-add-button" onClick = {handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddPizzaModal;