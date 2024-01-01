
import useForm from "../hooks/use-form";

const BasicForm = (props) => {

  const {
    value:entername,
    hasError:nameError,
    valueHandler:enterNameHandler,
    blurHandler:blurNameHandler,
    reset:resetName,
    valueIsValid:nameIsValid
  }=useForm(value=>value.trim()!=="")
  

  const {
    value:enterLastName,
    hasError:lastNameError,
    valueHandler:enterLastNameHandler,
    blurHandler:blurLastNameHandler,
    reset:resetLastName,
    valueIsValid:LastNameIsValid
  }=useForm(value=>value.trim()!=="")
 
  const {
    value:enterEmail,
    hasError:emailError,
    valueHandler:enterEmailHandler,
    blurHandler:blurEmailHandler,
    reset:resetEmail,
    valueIsValid:emailIsValid
  }=useForm(value=>value.includes("@"))
 
  

  
  const submitFormHandler=(event)=>{
    console.log(event.preventDefault)
    if(!nameIsValid && !LastNameIsValid && !emailIsValid){
      return;
    }
    resetName()
    resetLastName()
    resetEmail()
    
  }

  let formIsValid=false;

  if( nameIsValid && LastNameIsValid && emailIsValid){
    formIsValid=true;
  }
  const validClass=nameError ? "form-control invalid" : "form-control"
  const validClassLastName=lastNameError ? "form-control invalid" : "form-control"
  const validClassEmail=emailError ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={validClass}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={blurNameHandler} onChange={enterNameHandler} value={entername} type='text' id='name' />
          {nameError && <p className="error-text">Ne peut pas etre vide</p>}
        </div>
        
        <div className={validClassLastName}>
          <label htmlFor='name'>Last Name</label>
          <input  
          onBlur={blurLastNameHandler}
          onChange={enterLastNameHandler}
          value={enterLastName}
          type='text' id='name' />
          {lastNameError && <p className="error-text">Ne peut pas etre vide</p>}
        </div>
      </div>
      <div className={validClassEmail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
         onBlur={blurEmailHandler}
         onChange={enterEmailHandler}
         value={enterEmail}
        type='text' id='name' />
        {emailError && <p className="error-text">N'est pas un email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
