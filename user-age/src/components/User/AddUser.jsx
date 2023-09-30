import styles from "./AddUser.module.css"
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import { useState } from "react";
import ErrorModal from "./Modal/ErrorModal";

const AddUser=(props)=>{

    const [userInput,setUserInput]=useState({
        "userName":"",
        "age":""
    })
    const [error,setError]=useState()
    const UserHandler=(event)=>{
    event.preventDefault();

    if(userInput['userName'].trim().length ===0 || userInput['age'].trim().length===0){
       setError({
        title:"Invalid Input",
        message:"Please enter valid name and valid age (not empty value)"
       })
    }
    if(+userInput["age"] < 1){
        setError({
            title:"Invalid Input",
            message:"Please enter valid age (>0)"
           })
    }else{
        const user={
            "id":Math.random().toString,
            "userName":userInput['userName'],
            "age":userInput['age']
        }
        props.addUser(user)
    }
   


        setUserInput({
            "userName":"",
            "age":""
        })
    }

    const onChangeHandler=(id,value)=>{
        setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [id]:value
            }
        });
       
    }

    const errorHandler=()=>{
        setError(null)
    }
    return (
       <div>
        {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>} 
        <form onSubmit={UserHandler}>
            
            <Card className={styles.input}>
                    <label htmlFor="UserName">UserName</label>
                    <input value={userInput['userName']} onChange={(e)=>onChangeHandler("userName",e.target.value)} type="text"/>
                    <label htmlFor="age">Age(Years)</label>
                    <input value={userInput['age']} onChange={(e)=>onChangeHandler("age",e.target.value)} id="age" type="number"/>

                    <Button type="submit">Add User</Button>
            </Card>
        </form>
       </div>
        
     
    )
}

export default AddUser