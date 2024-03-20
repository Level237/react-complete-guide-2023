import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todo-context';


function App() {
  //const todos=[new Todo('Learn React'),new Todo('Learn Typescript')];
  
  return (
    <TodosContextProvider>
      <NewTodo/>
     <Todos/>
    </TodosContextProvider>
  );
}

export default App;
