import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{

    const [showForm,setShowForm]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        //console.log(expenseData)
    }

    const showFormExpense=()=>{
        setShowForm(true)
    }
    return (
        <div className="new-expense">
            {!showForm && <div>
                <button onClick={showFormExpense}>Add New Expense</button>
                </div>}
                {showForm && <ExpenseForm showForm={setShowForm} onSaveExpenseData={saveExpenseDataHandler}/>}
            
        </div>
    )
}

export default NewExpense;