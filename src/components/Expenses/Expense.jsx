import { useState } from "react"
import Card from "../Ui/Card"
import "./Expense.css"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseItem from "./ExpenseItem"

const Expense=(props)=>{

    const [filteredYear,setFilteredYear]=useState("2020");

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent=<p>No Expenses Found</p>;

    if(filteredExpenses.length>0){
        expensesContent=filteredExpenses.map((item)=><ExpenseItem title={item.title} key={item.id} amount={item.amount} date={item.date}/>);
    }
    return(
        <Card className="expenses">
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expensesContent}

 

        </Card>
    )
}

export default Expense