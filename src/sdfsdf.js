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