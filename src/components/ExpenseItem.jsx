import "./ExpenseItem.css"
function ExpenseItem({date,amount,title}){

    const expenseDate=new Date(2021,2,28);
    const expenseTitle="Car Insurance"
    const expenseAmount=267
    return (
        <div className="expense-item">
        <div>
          {date.toISOString()}
        </div>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;