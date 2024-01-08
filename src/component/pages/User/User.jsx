import React from 'react'
import './user.css'
import  PermIdentityIcon from '@mui/icons-material/PermIdentity';
import  CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import  EmailIcon from '@mui/icons-material/Email';
import  MyLocationIcon from '@mui/icons-material/MyLocation';
import  PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>
            <Link to= "/newUser">
            <button  className="userAdButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
            <div className="userShowTop">
  <img src="https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg" alt="" className="userShowTopImg" />
         <div className="userShowTopTitle">
          <span className="userShowtopName">Stiphilan Justin</span>
          <span className="userShowtopUserTitle">Software Engineer</span>
         </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details
            </span>
            <div className="userShowInfo">
            <PermIdentityIcon className='userShowIcon'/>
            <span className="userShowInfoTitle ">stiphilan10 </span>
            </div>
            <div className="userShowInfo">
            < CalendarTodayIcon className='userShowIcon'/>
            <span className="userShowInfoTitle ">+91 678904344 </span>
            </div>
            <div className="userShowInfo">
            <EmailIcon className='userShowIcon'/>
            <span className="userShowInfoTitle ">abbbbc@gamil.com </span>
            </div>
            <div className="userShowInfo">
            <MyLocationIcon className='userShowIcon'/>
            <span className="userShowInfoTitle ">Chennai | India </span>
            </div>
            
          </div>
            </div>
            <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form  className="userUpdateTitileForm">
            <div className="userUpdateLeft">
             <div className="userUpdateItem">
             <label>FullName</label>
              <input type="text" 
              placeholder='Stiphilan Justin'
               className='userUpdateInput' />
             </div>
             <div className="userUpdateItem">
             <label>Username</label>
              <input type="text" 
              placeholder='stiphilan10' 
              className='userUpdateInput' />
             </div>
             <div className="userUpdateItem">
             <label>Email</label>
              <input type="text" 
              placeholder='abbbbc@gamil.com' 
              className='userUpdateInput' />
             </div>
             <div className="userUpdateItem">
             <label>Phone</label>
              <input type="text"
               placeholder='+91 678904344'
                className='userUpdateInput' />
             </div><div className="userUpdateItem">
             <label>Location</label>
              <input type="text"
               placeholder='Chennai | India'
                className='userUpdateInput' />
             </div>

            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
<img src="https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg" alt="" className="userUpdateUpLoadImg" />
             <label htmlFor="file">
             <PublishIcon className='userUpdateIcon'/>
             </label>
             <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateRiButtton">Update</button>
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default User 