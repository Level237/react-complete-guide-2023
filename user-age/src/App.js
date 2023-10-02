import React, { Fragment, useState } from 'react';
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
    <Fragment>
      <AddUser addUser={add}/>
      <UserList users={users}/>
    </Fragment>
  );
}

export default App;
