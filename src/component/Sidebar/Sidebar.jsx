import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <LineStyleIcon className='sidebaricon'/>
                    Home
                    </li>
                    <li className="sidebarListItem">
                    <TimelineIcon className='sidebaricon'/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebaricon'/>
                    Sales
                    </li>
                    

                </ul>
            </div>
            
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to = "/users" className='link'>
                    <li className="sidebarListItem ">
                    <PersonIcon className='sidebaricon'/>
                    User
                    </li>
                    </Link>
                    <Link to ="/products" className='link'>
                    <li className="sidebarListItem">
                    <StorefrontIcon className='sidebaricon'/>
                    Product
                    </li></Link>
                    
                     <li className="sidebarListItem">
                    <AttachMoneyIcon className='sidebaricon'/>
                    Transcation
                    </li>
                    
                     <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebaricon'/>
                    Report
                    </li>
                    

                </ul>
            </div>
            
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <LineStyleIcon className='sidebaricon'/>
                    Home
                    </li>
                    <li className="sidebarListItem">
                    <TimelineIcon className='sidebaricon'/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebaricon'/>
                    Sales
                    </li>
                    

                </ul>
            </div>
            
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <LineStyleIcon className='sidebaricon'/>
                    Home
                    </li>
                    <li className="sidebarListItem">
                    <TimelineIcon className='sidebaricon'/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebaricon'/>
                    Sales
                    </li>
                    

                </ul>
            </div>
            
            
            

        </div>
    </div>
  )
}

export default Sidebar