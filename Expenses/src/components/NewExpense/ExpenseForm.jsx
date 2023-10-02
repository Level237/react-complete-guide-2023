import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{

    const [entererTitle,setEnteredTitle]=useState("")
    const [enteredAmount,setEnteredAmount]=useState("")
    const [enteredDate,setEnteredDate]=useState("")

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
            setEnteredTitle(value)
        }else if(identifier==="date"){
            setEnteredDate(value)
        }else{
            setEnteredAmount(value)
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expendData={
            title:entererTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expendData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    const cancelForm=()=>{
        props.showForm(false)
    }
    return (
        <form onSubmit={submitHandler}>
    <div className="new-expense__controls">        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" 
            value={entererTitle}
            onChange={titleChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"
            value={enteredAmount}
             onChange={amountChangehandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" 
            value={enteredDate}
            onChange={dateChangehandler}/>
        </div>
        <div className="new-expense__actions">
            <button onClick={cancelForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </div>
        </form>
    );
}

export default ExpenseForm