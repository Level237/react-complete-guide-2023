import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm=()=>{

    //const [title,setTitle]=useState("")
    //const [amount,setAmount]=useState("")
    //const [date,setDate]=useState("")

    const [userInput,setUserInput]=useState({
        title:"",
        date:"",
        amount:""
    })
    const titleChangehandler=(event)=>{
        //setTitle(event.target.value)
setUserInput({...userInput,title:event.target.value});
    }
    const amountChangehandler=(event)=>{
        setUserInput({...userInput,amount:event.target.value});
    }
    const dateChangehandler=(event)=>{
        setUserInput({...userInput,date:event.target.value});
    }
    return (
        <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </div>
        </form>
    );
}

export default ExpenseForm