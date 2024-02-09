import React, {createContext, useState, useEffect} from "react";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import "./ToppingTable.css"
export const ToppingTable = ({toppings, deleteRow, editRow}) => {
    return (
        <div className="toppings-table-wrapper">
            <table className="toppings-table">
                <thead>
                    <tr>
                        <th className="toppings-expand">Toppings</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody className = "toppings-body">
                {
                    toppings.map((topping, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="toppings-expand">{topping}</td>
                                <td>
                                    <span className="toppings-actions">
                                        <BsFillTrashFill className="toppings-delete-button" onClick={() => deleteRow(idx)}/>
                                        <BsFillPencilFill onClick = {() => editRow(idx)}/>
                                    </span>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ToppingTable;