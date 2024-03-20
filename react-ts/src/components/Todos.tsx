import React, { useContext } from 'react'

import TodoItem from './TodoItem';

import CSS from "csstype";
import { TodoContext } from '../store/todo-context';
const Todos:React.FC=() =>{

  const todoStyles:CSS.Properties={
    listStyle: "none",
    margin: "2rem auto",
    padding:"0",
    width:" 40rem"
  }

 const todosCtx=useContext(TodoContext)

 
  return (
    
      <ul style={todoStyles}>
        {todosCtx.items.map(item=> <TodoItem id={item.id} removeItem={todosCtx.removeTodo.bind(null,item.id)} key={item.id} text={item.text}/>)}
      </ul>
    
  )
}

export default Todos;
