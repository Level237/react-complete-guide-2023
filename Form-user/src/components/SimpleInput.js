import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value:enteredName,
    hasError:nameInputHasError,
    isValid:enteredNameIsValid,
    valueChangeHandler:nameChangedHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  }=useInput(value=>value.trim()!=='');
  
  const {
    value:enteredEmail,
    hasError:enteredEmailIsInvalid,
    isValid:enteredEmailIsValid,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput(value=>value.includes("@"));


    let formIsValid=false;
    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid=true
    }


  const formSubmissionHandler=event=>{
    event.preventDefault();
    
    if(!enteredNameIsValid){
      return;
    }
    //nameInputRef.current.value="" Not ideal,don't manipulate the dom
    resetNameInput()

    resetEmailInput();
  }

  
  const nameInputClasses=nameInputHasError ? "form-control invalid" : "form-control"
  const EmailInputClasses=enteredEmailIsInvalid ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameChangedHandler} 
        onBlur={nameBlurHandler}
        value={enteredName} />
        
      {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
        type='email' 
        id='email' 
        onChange={emailChangeHandler} 
        onBlur={emailBlurHandler}
        value={enteredEmail} />
        
      {enteredEmailIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
