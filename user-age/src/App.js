import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {

  const [users,setUsers]=useState([])

console.log(users)
  const add=(user)=>{
setUsers((prevUser)=>{
  return [...prevUser,user]
})
  }
  return (
    <div>
      <AddUser addUser={add}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
