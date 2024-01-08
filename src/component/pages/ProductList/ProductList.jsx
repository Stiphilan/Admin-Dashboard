import React from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ProductRows } from '../../../dummydata';
import { Link } from 'react-router-dom';
import { useState } from "react";


function ProductList() {
    const [data, setdata] = useState(ProductRows);
  const handleDelete =(id)=>{
setdata(data.filter((item)=> item.id!== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Product', headerName: 'Product', width: 230,renderCell:(params)=>{
        return(
            <div className="productList">
                <img src={params.row.avatar} alt="" className='ProductListImg' />
                {params.row.ProductName}
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
                <Link to ="/Product"><button className="ProductListEdit">Edit</button></Link>
      
                
                <DeleteOutlineIcon className='ProductListIcon' onClick = {()=>handleDelete(params.row.id)}/>
                </>
            )
        }
      },
  ];
  return (
    <div className='productList'>
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
  )
}

export default ProductList