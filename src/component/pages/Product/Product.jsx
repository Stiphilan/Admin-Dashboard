import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';
import Charts from '../../charts/Charts';
import { ProductData } from '../../../dummydata';
import PublishIcon from '@mui/icons-material/Publish';
import { display } from '@mui/system';

function Product() {
  return (
    <div className='product'>
        <div className="productTitltContainer">
            <h className="productTitle">Product</h>
            <Link to="/newProduct">
            <button className="productAddbutton">Create</button>  
            </Link>
            
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Charts data={ProductData} dataKey="Sales"title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="data:image/jpeg;base64,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"  className='ProductImg' alt="" />
                    <span className="productName">Apple Air Pod</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
<span className="productInfoKey">Id:</span>
<span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
<span className="productInfoKey">Sales:</span>
<span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
<span className="productInfoKey">Active:</span>
<span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
<span className="productInfoKey">Instock</span>
<span className="productInfoValue">No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormleft">
<label htmlFor="">Product Name</label>
<input type="text" placeholder='' />
<label htmlFor="">InStock</label>
<select name="instock" id="instock">
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
<label htmlFor="">Active</label>
<select name="Active" id="Active">
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
                </div>
                <div className="productFormRight">
<div className="productUpload">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"  className='ProductImg' />
    <label For="file">
    < PublishIcon/>

    </label>
    <input type="file" id='file' style={{display:"none"}} />

</div>
<button className="productButton">
    update
</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product