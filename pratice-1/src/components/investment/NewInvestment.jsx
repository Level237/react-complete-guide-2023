import { useState } from "react";


const initialInput={
    'current-saving':1000,
    'yearly-contribution':1200,
    'expected-return':7,
    duration:10
}
const NewInvestment=()=>{


    const [userInput,setUserInput]=useState(initialInput)
    const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        const yearlyData = []; // per-year results
    
        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
    
        // do something with yearlyData ...
      };

      const inputChangeHandler=(identifier,value)=>{
        setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [identifier]:value
            }
        })
      }

      const submitHandler=(e)=>{
        e.preventDefault();
      }

      const resetForm=()=>{
setUserInput(initialInput)
      }
    return (
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={userInput['current-saving']} id="current-savings" onChange={(event)=>inputChangeHandler("current-saving",event.target.value)} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={userInput['yearly-contribution']} id="yearly-contribution" onChange={(event)=>inputChangeHandler("yearly-contribution",event.target.value)} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={userInput['expected-return']} id="expected-return" onChange={(event)=>inputChangeHandler("expected-return",event.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={userInput['duration']} id="duration" onChange={(event)=>inputChangeHandler("duration",event.target.value)} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetForm} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default NewInvestment