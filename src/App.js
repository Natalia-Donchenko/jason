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
   
  const handleFirstNameChange = (firstName) => {
    setEditingUser({...editingUser, firstName});
  }

  const handleLastNameChange = (lastName) => {
    setEditingUser({...editingUser, lastName});
  }

  const handleEmailChange = (email) => {
    setEditingUser({...editingUser, email});
  }

  const handleAgeChange = (age) => {
    setEditingUser({...editingUser, age});
  }

  const handleGenderChange = (gender) => {
    setEditingUser({...editingUser, gender})
  }

  return (
    <div className='container'>
      {editingUser&& (
        <div className='wrapper'>
          <div className='form'>
            <h1 className='form__title'>User Editor</h1>
            <form 
              className='form__editor' 
              // editingUser={editingUser} 
              onSubmit={handleUserEdit}>
        
              <label className='form__editor-label'>Firts Name*</label>
              <input 
                className='form__editor_input' 
                value={editingUser.firstName} 
                onChange={(e) => handleFirstNameChange(e.target.value)}
                id="firstName" 
                type="text" 
                name="first_name"
              />
              
              <label className='form__editor-label'>Last Name*</label>
              <input 
                className='form__editor_input' 
                value={editingUser.lastName} 
                onChange={(e) => handleLastNameChange(e.target.value)}
                id="lastName" 
                type="text" 
                name="last_name"
              /> 
              
              <label className='form__editor-label'>Email</label>
              <input 
                className='form__editor_input' 
                value={editingUser.email} 
                onChange={(e) => handleEmailChange(e.target.value)}
                id="email" 
                type="email" 
                name="email"
              />

              <label className='form__editor-label'>Age</label>
              <input
                className='form__editor_input'
                value={editingUser.age}
                onChange={(e) => handleAgeChange(e.target.value)}
                type="number"
                name="age"
                id='age'
              />
              
              <div>
                <label>Gender</label>
                <div className='form__editor_gender'>
                  <label>
                    <input 
                      className='form-check-input'
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) => handleGenderChange(e.target.value)}
                      checked={editingUser.gender === 'male'}
                    />
                    male
                  </label>
                  <label>
                    <input 
                      className='form-check-input'
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => handleGenderChange(e.target.value)}
                      checked={editingUser.gender === 'female'}
                    />
                    female
                  </label>
                  <label>
                    <input 
                      className='form-check-input'
                      type="radio"
                      name="gender"
                      value="unset"
                      onChange={(e) => handleGenderChange(e.target.value)}
                      checked={editingUser.gender === 'unset'}
                    />
                    prefer not to respond (unset)
                  </label>
                </div>
              </div>
   
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