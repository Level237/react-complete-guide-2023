import styles from "./AddUser.module.css"

const AddUser=()=>{

    const UserHandler=(event)=>{
    event.preventDefault();

    }

    const onChangeHandler=(id,value)=>{
        
    }
    return (
        <form onSubmit={UserHandler}>
            <div className={styles.input}>
                    <label htmlFor="UserName">UserName</label>
                    <input  onChange={(e)=>onChangeHandler("userName",e.target.value)} type="text"/>
                    <label htmlFor="age">Age(Years)</label>
                    <input onChange={(e)=>onChangeHandler("age",e.target.value)} id="age" type="number"/>

                    <button type="submit">Add User</button>
            </div>
        </form>
     
    )
}

export default AddUser