import React, {createContext, useState, useEffect} from "react";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import "./PizzaTable.css"
export const PizzaTable = ({pizzas, deleteRow, editRow}) => {
    return (
        <div className="pizzas-table-wrapper">
            <table className="pizzas-table">
                <thead>
                <tr>
                    <th>Pizza Name</th>
                    <th className = "pizzas-expand">Toppings</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className="pizzas-body">
                {pizzas.map((pizza, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{pizza.Name}</td>
                            <td className="pizzas-expand">{pizza.Toppings.join(', ')}</td>
                            <td className = "fit">
                            <span className="pizzas-actions">
                                <BsFillTrashFill className="pizzas-delete-button" onClick={() => deleteRow(idx)} />
                                <BsFillPencilFill onClick={() => editRow(idx)} />
                            </span>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default PizzaTable;