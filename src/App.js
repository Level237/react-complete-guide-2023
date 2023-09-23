import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {

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
  return (
    <div>
 <h2>Let's get started</h2>
 <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
 <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
 <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
     
  );
}

export default App;
