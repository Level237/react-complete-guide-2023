import { useState } from "react"

const useForm=(validateValue)=>{

    const [enteredValue,setEnteredValue]=useState('')
    const [touched,setTouched]=useState(false);
    const valueIsValid=validateValue(enteredValue);
    const hasError=!valueIsValid && touched;
    const valueHandler=(event)=>{
        setEnteredValue(event.target.value);
    }

    const blurHandler=()=>{
        setTouched(true)
    }

    const reset=()=>{
        setEnteredValue('')
        setTouched(false);
    }

    return{
        value:enteredValue,
        hasError,
        valueHandler,
        blurHandler,
        reset,
        valueIsValid
    }
    
}
export default useForm;