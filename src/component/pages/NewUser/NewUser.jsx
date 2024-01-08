import React from 'react'
import './newUser.css'

function NewUser() {
  return (
    <div className='newUser'>
        
        <h1 className="NewUserpageTitle">NewUser</h1>
        <form  className="NewuserPageForm">
            <div className="NewUserItem">
            <label >FullName</label>
            <input type="text" placeholder='Andrew Justin' />
            </div>
            <div className="NewUserItem">
            <label >UserName</label>
            <input type="text" placeholder='Andrew' />
            </div>
            <div className="NewUserItem">
            <label> Email</label>
            <input type="email" placeholder='Adcbd@gmail.com' />
            </div>
            <div className="NewUserItem">
            <label >Password</label>
            <input type="Password" placeholder='' />
            </div>
            <div className="NewUserItem">
            <label >Phone</label>
            <input type="text" placeholder='+917737648963' />
            </div>
            <div className="NewUserItem">
            <label >Loctaion</label>
            <input type="text" placeholder='Chennai | India' />
            </div>
            <div className="NewUserItem">
            <label >Gender</label>
            <div className="NewUserGender">
            <input type="radio" name='gender' id="male" value='male' />
            <label for="male">Male</label>
            <input type="radio" name='gender' id="female" value='female' />
            <label for="female">Female</label>
            <input type="radio" name='gender' id="other" value='other' />
            <label for="other">Other</label>
            </div>
            </div>
            <div className="NewUserItem">
                <label>Active</label>
                <select className='NewUserSelect' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                 </div>
                 <button className="NewUserButton">Create</button>
           <div>
           
           </div>
            
            
            
        </form>
    </div>
    
    
  )
}

export default NewUser