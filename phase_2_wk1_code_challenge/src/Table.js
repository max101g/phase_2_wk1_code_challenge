import React from "react";
import Tablerow from "./Tablerow";

function Table ({arayOfAllTransactions}) {

    const oneTransaction = arayOfAllTransactions.map ((transaction)=> {
        return <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
               </tr>
        
    })
    
    return (
        <table className= "table table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {oneTransaction}
            </tbody>
        </table>
    )
}

export default Table 