import React, { Component } from 'react';
import { data } from './users-data';
import './styles.css';
import { useState } from 'react';

function App() {
  const userData = deepClone(data.users);
  const[users, setUsers] = useState(userData);
  const[editingUser, setEditingUser] = useState(null);

  const handleUserEdit = (value) => {
    const user = users.find((el) => el.id === +value);
    setEditingUser(user);
  }

  const handleUserSubmit = () => {
    const editingUserIndex = users.findIndex(user => user.id === editingUser.id);
    const updatedUsers = [...users];

    updatedUsers[editingUserIndex]=editingUser;
    setUsers(updatedUsers);
    setEditingUser(null)
 }
   
  const handleFirstNameChange = (event) => {
    setEditingUser({...editingUser, firstName: event.target.value});
  }

  const handleLastNameChange = (event) => {
    setEditingUser({...editingUser, lastName: event.target.value});
  }

  const handleEmailChange = (event) => {
    setEditingUser({...editingUser, email: event.target.value});
  }

  const handleAgeChange = (event) => {
    setEditingUser({...editingUser, age: event.target.value});
  }

  return (
    <div className='container'>
      {editingUser&& (
        <div className='wrapper'>
          <div className='form'>
            <h1 className='form__title'>User Editor</h1>
            <form className='form__editor' editingUser={editingUser} onSubmit={handleUserEdit}>
        
              <label className='form__editor-label'>Firts Name*</label>
              <input 
                className='form__editor_input' 
                value={editingUser.firstName} 
                onChange={handleFirstNameChange}
                id="firstName" 
                type="text" 
                name="first_name">
              </input>

              <label className='form__editor-label'>Last Name*</label>
              <input 
                className='form__editor_input' 
                value={editingUser.lastName} 
                onChange={handleLastNameChange}
                id="lastName" 
                type="text" 
                name="last_name"> 
              </input>

              <label className='form__editor-label'>Email</label>
              <input 
                className='form__editor_input' 
                value={editingUser.email} 
                onChange={handleEmailChange}
                id="email" 
                type="email" 
                name="email">
              </input>

              <label className='form__editor-label'>Age</label>
              <input
                className='form__editor_input'
                value={editingUser.age}
                onChange={handleAgeChange}
                id="age"
                type="number"
                name="age">
              </input>
            </form>

            <div className='form__buttons'>
              <button 
                className='btn btn-primary' 
                type="submit"
                onClick={handleUserSubmit}>
                Submit
              </button>

              <button 
                className='btn btn-outline-primary' 
                onClick={() => setEditingUser(null)}>
                Cansel
              </button>
              </div>
          </div>
        </div>
      )}
      
      <table 
        className='table' 
        data={data}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>
                <button 
                  id={user.id} 
                  className='btn btn-light' 
                  onClick={() => {
                    setEditingUser(user)
                  }}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>   
    </div>
  )
}

const deepClone = (originalObj) => {
  if (!originalObj || typeof originalObj !== "object")  { 
    return originalObj; 
  }

  const clonedObj = Array.isArray(originalObj) ? [] : {};

  for (const key in originalObj) {
    const value = originalObj[key];

    clonedObj[key] = deepClone(value);
  }

  return clonedObj;
};

export default App;