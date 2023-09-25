import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm=()=>{

    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const [date,setDate]=useState("")

    //const [userInput,setUserInput]=useState({
        //title:"",
       // date:"",
       // amount:""
    //})
    const titleChangehandler=(event)=>{
        inputChangeHandler("title",event.target.value)
//setUserInput({...userInput,title:event.target.value});
//setUserInput((prevInput)=>{console.log(prevInput);return {...prevInput,title:event.target.value}})
    }
    const amountChangehandler=(event)=>{
        inputChangeHandler("amount",event.target.value)
        //setUserInput({...userInput,amount:event.target.value});
    }
    const dateChangehandler=(event)=>{
        inputChangeHandler("date",event.target.value)
        //setUserInput({...userInput,date:event.target.value});
    }

    const inputChangeHandler=(identifier,value)=>{
        if(identifier==="title"){
            setTitle(value)
        }else if(identifier==="date"){
            setDate(value)
        }else{
            setAmount(value)
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expendData={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        console.log(expendData)
        setTitle("")
        setAmount("")
        setDate("")
    }
    return (
        <form onSubmit={submitHandler}>
    <div className="new-expense__controls">        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" 
            value={title}
            onChange={titleChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"
            value={amount}
             onChange={amountChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" 
            value={date}
            onChange={dateChangehandler}/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </div>
        </form>
    );
}

export default ExpenseForm