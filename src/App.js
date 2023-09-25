import React from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const App=() =>{
  const expenses=[
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
    /*
 return React.createElement(
  'div',
  {},
  React.createElement('h2',{},'Let\'s get started'),
  React.createElement(Expense,{items:expenses})
 )*/
  return (
    <div>
 <NewExpense/>
<Expense items={expenses}/>
    </div>
     
  );
}

export default App;
