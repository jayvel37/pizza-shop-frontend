import {toppingsContext} from './ToppingsPage'
import { useContext, useState} from "react";
import axios from "axios";

function AddTopping() {
    const [toppings, setToppings] = useContext(toppingsContext);
    const [currTopping, setCurrTopping] = useState('Enter a topping')
    function AddTopping() {
        const URL = "http://localhost:8000/toppings/add-topping/";

        axios.post(URL, {
                Topping: currTopping
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
    return (
        <div className="Toppings">
            <input
                type="text"
                value={currTopping}
                onChange={e => setCurrTopping(e.target.value)}
            />
            <button onClick={AddTopping}>Add Topping</button>
        </div>
    );
}

export default AddTopping;