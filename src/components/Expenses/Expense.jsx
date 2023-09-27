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
    return(
        <Card className="expenses">
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
 {props.items.map((item)=><ExpenseItem title={item.title} key={item.id} amount={item.amount} date={item.date}/>)}
 

        </Card>
    )
}

export default Expense