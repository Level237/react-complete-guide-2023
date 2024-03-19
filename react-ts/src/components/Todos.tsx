import React from 'react'
import Todo from '../models/Todo';
import TodoItem from './TodoItem';

import CSS from "csstype";
const Todos:React.FC<{items:Todo[]}>=(props) =>{

  const todoStyles:CSS.Properties={
    listStyle: "none",
    margin: "2rem auto",
    padding:"0",
    width:" 40rem"
  }

  return (
    
      <ul style={todoStyles}>
        {props.items.map(item=> <TodoItem key={item.id} text={item.text}/>)}
      </ul>
    
  )
}

export default Todos;
