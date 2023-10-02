import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList=(props)=>{
    let expensesContent=<p>No Expenses Found</p>;

    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">Expenses Not Found</h2>
    }

    return(
        <ul className="expenses-list">
            { props.items.map((item)=>
            <ExpenseItem 
            title={item.title} 
            key={item.id} 
            amount={item.amount} 
            date={item.date}/>)}
       
        </ul>
    )
}

export default ExpensesList;