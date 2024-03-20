import React, { useState } from 'react';
import Todo from "../models/Todo"

type TodosContextObj={
    items:Todo[];
    addTodo:(text:string)=>void;
    removeTodo:(id:string)=>void
}

export const TodoContext=React.createContext<TodosContextObj>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
});


const TodosContextProvider:React.FC=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([])

    const addTodoHandler=(todoText:string)=>{
      const newTodo=new Todo(todoText);
  
      setTodos((prevTodos)=>{return prevTodos.concat(newTodo)})
    }
  
    const removeTodoHandler=(id:string)=>{
      const updateTodo=todos.filter((todo)=>todo.id!==id);
      setTodos(updateTodo);
    }

    const contextValue:TodosContextObj={
        items:todos,
        addTodo:addTodoHandler,
        removeTodo:removeTodoHandler
    }
    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodosContextProvider