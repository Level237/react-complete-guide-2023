import styles from "./AddUser.module.css"
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import { useState } from "react";

const AddUser=(props)=>{

    const [userInput,setUserInput]=useState({
        "userName":"",
        "age":""
    })
    const UserHandler=(event)=>{
    event.preventDefault();

    if(userInput['userName'].trim().length ===0 || userInput['age'].trim().length===0){
       console.log("ee")
    }
    if(+userInput["age"] <1){
        console.log("d")
    }
    const user={
        "userName":userInput['userName'],
        "age":userInput['age']
    }
    props.addUser(user)


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
    return (
        <form onSubmit={UserHandler}>
            <Card className={styles.input}>
                    <label htmlFor="UserName">UserName</label>
                    <input value={userInput['userName']} onChange={(e)=>onChangeHandler("userName",e.target.value)} type="text"/>
                    <label htmlFor="age">Age(Years)</label>
                    <input value={userInput['age']} onChange={(e)=>onChangeHandler("age",e.target.value)} id="age" type="number"/>

                    <Button type="submit">Add User</Button>
            </Card>
        </form>
     
    )
}

export default AddUser