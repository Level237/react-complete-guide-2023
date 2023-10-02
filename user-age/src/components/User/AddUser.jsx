import styles from "./AddUser.module.css"
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import React, { useState,useRef } from 'react';
import ErrorModal from "./Modal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser=(props)=>{

    const nameInputRef=useRef();
    const ageInputRef=useRef();

    const [error,setError]=useState()

    const UserHandler=(event)=>{
        const enterUserName=nameInputRef.current.value
        const enteredUserAge=ageInputRef.current.value
    event.preventDefault();

    if(enterUserName.trim().length ===0 || enteredUserAge.trim().length===0){
       setError({
        title:"Invalid Input",
        message:"Please enter valid name and valid age (not empty value)"
       })
    }
    if(+enteredUserAge < 1){
        setError({
            title:"Invalid Input",
            message:"Please enter valid age (>0)"
           })
    }else{
        const user={
            "id":Math.random().toString,
            "userName":enterUserName,
            "age":enteredUserAge
        }
        props.addUser(user)
        nameInputRef.current.value=""
        ageInputRef.current.value=""
    }
    }

    

    const errorHandler=()=>{
        setError(null)
    }
    return (
        
       <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>} 
        <form onSubmit={UserHandler}>
            
            <Card className={styles.input}>
                    <label htmlFor="UserName">UserName</label>
                    <input
                    type="text"
                    ref={nameInputRef}
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input
                     id="age" 
                     type="number"
                     ref={ageInputRef}
                     />

                    <Button type="submit">Add User</Button>
            </Card>
        </form>
       </React.Fragment>
        
     
    )
}

export default AddUser