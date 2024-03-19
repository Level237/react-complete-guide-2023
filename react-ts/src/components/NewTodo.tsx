import React, { useRef } from "react";
import CSS from "csstype";
const NewTodo:React.FC<{onAddTodo:(text:string)=>void}>=(props)=>{


    const FormStyles:CSS.Properties={
        width: "40rem",
    margin: "2rem auto",
      }
      const labelStyle:CSS.Properties={
        display: "block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
      }

      const InputStyle:CSS.Properties={
        display: "block",
        width: "100%",
        font: "inherit",
        fontSize: "1.5rem",
        padding: "0.5rem",
        borderRadius: "4px",
        backgroundColor: "#f7f5ef",
        border: "none",
        borderBottom: "2px solid #494844",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        marginBottom: "0.5rem",
      }
      const BtnStyle:CSS.Properties={
        font: "inherit",
        backgroundColor: "#ebb002",
        border: "1px solid #ebb002",
        color: "#201d0f",
        padding: "0.5rem 1.5rem",
        borderRadius: "4px",
        cursor: "pointer",
      }
    
    const todoTextInputRef=useRef<HTMLInputElement>(null)
    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText=todoTextInputRef.current!.value;

        if(enteredText.trim().length===0){
            return;
        }
        props.onAddTodo(enteredText);
    }
    return <form style={FormStyles} onSubmit={submitHandler}>
        <label style={labelStyle} htmlFor="text">Todo Text</label>
        <input style={InputStyle} type="text" name="" id="text" ref={todoTextInputRef}/>
        <button style={BtnStyle}>Add Todo</button>
    </form>
}

export default NewTodo;