import {toppingsContext} from './ToppingsPage'
import {useContext} from "react";
import axios from "axios";

function ToppingList() {
    const [toppings, setToppings] = useContext(toppingsContext);
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
    return (
        <div className="Toppings">
            {toppings ? toppings.length > 0 ?
                < ul>{toppings.map((t, i) => {
                    return <li key={i}>
                        <div key={i}>{t} </div> <button onClick={()=>{removeTopping(t)}}>remove</button>
                        <div key={i}>{t} </div> <button onClick={()=>{removeTopping(t)}}>remove</button>
                    </li>;
                })} </ul> :
                <div>No ToppingList Selected</div>:<div> </div>}
        </div>
    );
}

export default ToppingList;