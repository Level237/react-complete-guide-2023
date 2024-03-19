import React from 'react'
import Todo from '../models/Todo';
import TodoItem from './TodoItem';

import CSS from "csstype";
const Todos:React.FC<{items:Todo[],onRemoveTodo:(id:string)=>void}>=(props) =>{

  const todoStyles:CSS.Properties={
    listStyle: "none",
    margin: "2rem auto",
    padding:"0",
    width:" 40rem"
  }

  const removeHandler=(id:string)=>{
    props.onRemoveTodo(id)
  }
  return (
    
      <ul style={todoStyles}>
        {props.items.map(item=> <TodoItem id={item.id} removeItem={removeHandler} key={item.id} text={item.text}/>)}
      </ul>
    
  )
}

export default Todos;
