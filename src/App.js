// src/App.js
import React, { useState } from "react";
import UserForm from "./Components/userForm";
import Card from "./Components/card";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <div className="App">
      <h1>User Information</h1>
      <UserForm addUser={addUser} />
      <Card>
        <h2>Entered Information:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default App;

