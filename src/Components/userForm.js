// src/UserForm.js
import React, { useState } from "react";
import "./userForm.css";
import WarningDialog from "./WarningDialog";

function UserForm({ addUser }) {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
  });

  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, age } = formData;

    if (!username || age === "") {
      setWarningMessage("Please fill in all fields.");
      setShowWarning(true);
    } else if (age < 0) {
      setWarningMessage("Age cannot be negative.");
      setShowWarning(true);
    } else {
      addUser(formData);
      setFormData({ username: "", age: "" });
    }
  };

  const closeWarning = () => {
    setShowWarning(false);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
     <WarningDialog
     show={showWarning}
     message={warningMessage}
     onClose={closeWarning}
     onChange={handleChange}
   />
   </div>
  );
}

export default UserForm;
