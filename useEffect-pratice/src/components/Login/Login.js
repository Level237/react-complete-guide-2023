import React, { useEffect, useState,useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer=(state,action)=>{
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.includes("@")}
  }
  if(action.type === "INPUT_BLUR"){
    return {value:state.value,isValid:state.value.includes("@")}
  }
  return {value:'',isValid:false}
}

const passwordReducer=(state,action)=>{
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.trim().length > 6}
  }
  if(action.type === "INPUT_BLUR"){
    return {value:state.value,isValid:state.value.trim().length > 6}
  }
  return {value:'',isValid:false}
}
const Login = () => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:"",isValid:null})
  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:"",isValid:null})
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const authCtx=useContext(AuthContext)
  useEffect(()=>{
    
    const handler=setTimeout(()=>{
      console.log("checking update")
      
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      )
    },500)
  
    return ()=>{
      console.log("CLEANUP")
      clearTimeout(handler)
    }
  },[emailState.isValid,passwordState.isValid])


  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    dispatchPassword({type:"USER_INPUT",val:event.target.value})
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type:"INPUT_BLUR"})
    
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(emailState.value.trim().length > 6);
    dispatchPassword({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }else if(!emailState.isValid){
      emailRef.current.focus()
    }else if(!passwordState.isValid){
      passwordRef.current.focus()
    }
    
  };

  useEffect(()=>{
    console.log("Effect Running")
    return ()=>{
      console.log("Effect cleanup")
    }
  },[])
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
        ref={emailRef}
        id="email" 
        label="E-mail" 
        type="email" 
        isValid={emailState.isValid} 
        value={emailState.value} 
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        />
         <Input 
         ref={passwordRef}
        id="password" 
        label="Password" 
        type="password" 
        isValid={passwordState.isValid} 
        value={passwordState.value} 
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
