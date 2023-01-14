import React, { useState } from "react";

function Form () {
    const [form, setForm] = useState ()

    function handleDate (event) {
        setForm (event.target.value)
    }
    function handleDescription (event) {
        setForm (event.target.value)
    }
    function handleCategory (event) {
        setForm (event.target.value)
    }
    function handleAmount (event) {
        setForm (event.target.value)
    }

    function handleSubmit () {
        
    }
    
    return (
        <div>
            <form onSubmit={()=> {}} className="row p-3">
                <div className="col-3">
                    <input onChange={handleDate} name="date" className="form-control form-control-sm" type="date" placeholder="date" aria-label=".form-control-sm example"/>
                </div>
                <div className="col-3">
                    <input onChange={handleDescription} name="description" className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
                </div>
                <div className="col-3">
                    <input onChange={handleCategory } name="category" className="form-control form-control-sm" type="text" placeholder="category" aria-label=".form-control-sm example"/>
                </div>
                <div className="col-3">
                    <input onChange={handleAmount} name="amount" className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
                </div>
            </form>
            <button type="button" className="btn btn-secondary btn-lg" style={{}}>Add Transactions</button>
        </div>
    )
}

export default Form