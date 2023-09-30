import classes from "./ResultTable.module.css"

const formatter=new Intl.NumberFormat(
    'en-US',{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2,
        maximumFractionDigits:2
    }
)

const ResultTable=(props)=>{

    return (
        <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((result)=>
            <tr key={result.id}>
            <td>{result.year}</td>
            <td>{formatter.format(result.savingsEndOfYear)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>{formatter.format(result.savingsEndOfYear - props.currentSaving - result.yearlyContribution * result.year)}</td>
            <td>{formatter.format(props.currentSaving + result.yearlyContribution * result.year)}</td>
          </tr>
            )}
          
        </tbody>
      </table>
    )
}

export default ResultTable;