import React, { useState} from "react";
import Tablerow from "./Tablerow";

function Table ({arayOfAllTransactions}) {
    const [dataOfArray, setDataOfArray] = useState ("")

    function handleSubmit (e) {
        e.preventDefault ()
    }
    function handleChange (e) {
        setDataOfArray (e.target.value)
    }

    // const displayFiltered = arayOfAllTransactions.filter ((item)=> {
    //     if (dataOfArray === item.description) return true;
    // })

    // console.log (displayFiltered)

    const oneTransaction = arayOfAllTransactions.filter ((item)=> {
        return dataOfArray.toLowerCase () === "" ? item : item.description.toLowerCase ().includes (dataOfArray)
    })
    .map ((transaction)=> {
        return <tr key= {transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
               </tr>

        })

    return (
        <>
        <div>
            <div className="container-fluid">
                    <form onSubmit={handleSubmit} className="d-flex" role="search">
                        <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter description to search" aria-label="Search"/>
                    </form>
                </div>
            </div>
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
        </>
    )
}

export default Table 