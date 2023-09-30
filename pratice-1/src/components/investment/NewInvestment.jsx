import { useState } from "react";
import classes from "./NewInvestment.module.css"

const initialInput={
    'current-saving':1000,
    'yearly-contribution':1200,
    'expected-return':7,
    duration:10
}
const NewInvestment=(props)=>{


    const [userInput,setUserInput]=useState(initialInput)
    

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
        props.onCalculate(userInput)
      }

      const resetForm=()=>{
setUserInput(initialInput)
      }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={userInput['current-saving']} id="current-savings" onChange={(event)=>inputChangeHandler("current-saving",event.target.value)} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={userInput['yearly-contribution']} id="yearly-contribution" onChange={(event)=>inputChangeHandler("yearly-contribution",event.target.value)} />
          </p>
        </div>
        <div className={classes['input-group']}>
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
        <p className={classes['actions']}>
          <button type="reset" onClick={resetForm} className={classes['buttonAlt']}>
            Reset
          </button>
          <button type="submit"className={classes['button']}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default NewInvestment