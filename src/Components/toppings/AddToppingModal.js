import React, {createContext, useState, useEffect} from "react";
import './AddToppingModal.css';
export const AddToppingModal = ({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(defaultValue || {Topping: ""})

    const [error, setError] = useState("")

    const validateForm = () => {
        if (formState.Topping) {
            setError("")
            return true;
        } else {
            let errorField = [];
            for(const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorField.push(key)
                }
            }
            setError(errorField.join(', '))
            return false;
        }
    }
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState.Topping);
        closeModal();
    };

    return (
        <div className="add-toppings-modal-container" onClick = {(e) => {
            if(e.target.className === "add-toppings-modal-container") closeModal();
        }}>
            <div className="add-toppings-modal">
                <form>
                    <div className="add-topping-form-group">
                        <label htmlFor="Topping">Topping</label>
                        <input name="Topping" value = {formState.Topping} onChange={handleChange}/>
                    </div>
                    <div>
                        {error && <div className="topping-error">{`Please include: ${error}`}</div>}
                        <button type="add" className="add-topping-add-button" onClick = {handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddToppingModal;