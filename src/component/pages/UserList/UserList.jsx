import React from 'react'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { UserRows } from '../../../dummydata';
import { Link } from 'react-router-dom';
import { useState } from "react";

function UserList() {
  const [data, setdata] = useState(UserRows);
  const handleDelete =(id)=>{
setdata(data.filter((item)=> item.id!== id))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'User', headerName: 'user', width: 230,renderCell:(params)=>{
            return(
                <div className="userlistUser">
                    <img src={params.row.avatar} alt="" className='UserListImg' />
                    {params.row.UserName}
                </div>
            )
        } },
        
        {
          field: 'status',
          headerName: 'status',
          type: 'number',
          width: 90,
        },
        {
          field: 'transcation',
          headerName: 'Transcation',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            
            width:190,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to ="/user"><button className="userListEdit">Edit</button></Link>
          
                    
                    <DeleteOutlineIcon className='UserListIcon' onClick = {()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      ];
      
    
  return (
    <div className='userlist'>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
} 

export default UserList