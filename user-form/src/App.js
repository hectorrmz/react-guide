import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) =>
    setUsersList((prevUsersList) => [...prevUsersList, user]);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
