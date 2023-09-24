import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
const ExpenseItem=({date,amount,title})=>{

    const clickHandler=()=>{
        console.log("clicked");
    }
  
    return (
        <Card className="expense-item">

            <ExpenseDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;