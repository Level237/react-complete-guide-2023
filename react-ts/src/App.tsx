import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';


function App() {
  //const todos=[new Todo('Learn React'),new Todo('Learn Typescript')];
  const [todos,setTodos]=useState<Todo[]>([])

  const addTodoHandler=(todoText:string)=>{
    const newTodo=new Todo(todoText);

    setTodos((prevTodos)=>{return prevTodos.concat(newTodo)})
  }

  const removeTodoHandler=(id:string)=>{
    const updateTodo=todos.filter((todo)=>todo.id!==id);
    setTodos(updateTodo);
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos onRemoveTodo={removeTodoHandler} items={todos}/>
    </div>
  );
}

export default App;
