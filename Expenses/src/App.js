import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=[
  {
    id:"e1",
    title:"Toilet Paper",
    amount:68,
    date:new Date(2021,2,28)
  },
  {
    id:"e2",
    title:"new Tv",
    amount:96.7,
    date:new Date(2023,2,28)
  },
  {
    id:"e3",
    title:"Car Insurance",
    amount:206.5,
    date:new Date(2022,5,12)
  },
  {
    id:"e4",
    title:"new Desk",
    amount:100.7,
    date:new Date(2020,7,14)
  },
]
const App=() =>{
  
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
    /*
 return React.createElement(
  'div',
  {},
  React.createElement('h2',{},'Let\'s get started'),
  React.createElement(Expense,{items:expenses})
 )*/

 const addExpenseHandler=(expense)=>{
  setExpenses(prevExpenses=>{
    return [expense,...prevExpenses]
  })
 }
  return (
    <div>
 <NewExpense onAddExpense={addExpenseHandler}/>
<Expense items={expenses}/>
    </div>
     
  );
}

export default App;
