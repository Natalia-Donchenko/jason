import React, { Component } from 'react';
import { data } from './users-data';
import './styles.css';
import { useState } from 'react';

function App() {
  const userData = deepClone(data.users);
  const[users, setUsers] = useState(userData);
  const[editingUser, setEditingUser] = useState(null);

  // const updateUsersAge = (user) => {
  //   const userBithday = Date.parse(user.birthDate)
  //   const today = Date.now()
  //   user.age = Math.floor((today - userBithday) / 31536000000)
  // }

 

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

  const handlebPasswordChange = (password) => {
    setEditingUser({...editingUser, password})
  }

  const handleAgeChange = (age) => {
  
    setEditingUser({...editingUser, age});
  }

  const handlebirthDateChange = (birthDate) => {
    setEditingUser({...editingUser, birthDate});
  }

  const handleUpdateAge = () => {
    const userBithday = Date.parse(editingUser.birthDate)
    const today = Date.now()
    editingUser.age = Math.floor((today - userBithday) / 31536000000)
  }

  const handleGenderChange = (gender) => {
    setEditingUser({...editingUser, gender})
  }

  const handlePhoneChange = (phone) => {
    setEditingUser({...editingUser, phone})
  }

  const handlebloodGroupChange = (bloodGroup) => {
    setEditingUser({...editingUser, bloodGroup})
  }

  const handleHairColorChange = (hair, color) => {

    console.log(color)
    console.log(editingUser.hair['color'])

    setEditingUser({...editingUser, hair, color})
    console.log({...editingUser, color})
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

              <label className='form__editor-label'>Password</label>
              <input
                className='form__editor_input'
                value={editingUser.password}
                onChange={(e) => handlebPasswordChange(e.target.value)}
                type='password'
                name='password'
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

              <div className='form__birthDate'>
                <label className='form__editor-label'>Birth Date</label>
                <input
                  className='form__editor_input'
                  value={editingUser.birthDate}
                  onChange={(e) => handlebirthDateChange(e.target.value)}
                  type="date"
                  name="age"
                />
                <label className='form__editor-label'>Update age?</label>
                <input
                  className='form__editor_input'
                  type="checkbox"
                  onChange={(e) => handleUpdateAge(e.target.value)}
                />
              </div>
              
              <div>
                <label className='form__editor-label'>Gender</label>
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

              <div className='form__bloodGroup'>
                <label className='form__editor-label'>Blood Group</label>
                <div>
                  <select 
                    className='form__editor_input' 
                    name='blood_group'
                    value={editingUser.bloodGroup}
                    onChange={(e) => handlebloodGroupChange(e.target.value)}>
                      <option value="">{editingUser.bloodGroup}</option>
                      <option value="A+">A RhD positive (A+)</option>
                      <option value="A-">A RhD negative (A-)</option>
                      <option value="B+">B RhD positive (B+)</option>
                      <option value="B-">B RhD negative (B-)</option>
                      <option value="0+">O RhD positive (O+)</option>
                      <option value="0-">O RhD negative (O-)</option>
                      <option value="AB+">AB RhD positive (AB+)</option>
                      <option value="AB-">AB RhD negative (AB-)</option>
                  </select>
                </div>
              </div>

              <label className='form__editor-label'>Phone Number</label>
              <input
                
                name='phone'
                type='tel'
                value={editingUser.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
              />

              <label className='form__editor-label'>Hair</label>
              <div>
                <select
                  className='form__editor_input'
                  name='hair_color'
                  value={editingUser.hair.color}
                  onChange={(e) => handleHairColorChange(e.target.value)}> 
                    <option value="">{editingUser.hair.color}</option>
                    <option value="Auburn">Auburn</option>
                    <option value="Black">Black</option>
                    <option value="Blond">Blond</option>
                    <option value="Brown">Brown</option>
                    <option value="Chestnut">Chestnut</option>
                    <option value="Other">Other</option>

                </select> 
              </div>

   
            </form>

            <div className='form__buttons'>
              <button 
                className='btn btn-primary' 
                type="submit"
                onClick={handleUserSubmit}
                >
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
            <th>Password</th>
            <th>Gender</th>
            <th>Age</th>
            <th>BirthDate</th>
            <th>Phone Number</th>
            <th>Blood Group</th>
            <th>Color of Hair</th>
            <th>Type of Hair</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.birthDate}</td>
              <td>{user.phone}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.hair.color}</td>
              <td>{user.hair.type}</td>
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