import React from 'react'
import './featureinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeatureInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featureMoneyConatainer">
                <span className="featureMoney">$3.556</span>
                <span className="featureMoneyRate">-7.5<ArrowDownwardIcon className='featureIcon negative'/></span>
            </div>
            <span className='featureSub'> Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featureMoneyConatainer">
                <span className="featureMoney">$3.556</span>
                <span className="featureMoneyRate">-5.5<ArrowDownwardIcon className='featureIcon negative'/></span>
            </div>
            <span className='featureSub'> Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featureMoneyConatainer">
                <span className="featureMoney">$9.556</span>
                <span className="featureMoneyRate">7.5<ArrowUpwardIcon className='featureIcon'/></span>
            </div>
            <span className='featureSub'> Compare to last Month</span>
        </div>
    </div>
  )
}

export default FeatureInfo