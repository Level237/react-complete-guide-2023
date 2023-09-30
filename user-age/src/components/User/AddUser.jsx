import styles from "./AddUser.module.css"
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import { useState } from "react";

const AddUser=()=>{

    const [userInput,setUserInput]=useState({
        "userName":"",
        "age":0
    })
    const UserHandler=(event)=>{
    event.preventDefault();

    }

    const onChangeHandler=(id,value)=>{
        setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [id]:value
            }
        })
    }
    return (
        <form onSubmit={UserHandler}>
            <Card className={styles.input}>
                    <label htmlFor="UserName">UserName</label>
                    <input  onChange={(e)=>onChangeHandler("userName",e.target.value)} type="text"/>
                    <label htmlFor="age">Age(Years)</label>
                    <input onChange={(e)=>onChangeHandler("age",e.target.value)} id="age" type="number"/>

                    <Button type="submit">Add User</Button>
            </Card>
        </form>
     
    )
}

export default AddUser