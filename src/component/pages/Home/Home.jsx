import React from 'react'
import Charts from '../../charts/Charts'
import FeatureInfo from '../../featureinfo/FeatureInfo'
import './home.css'
import { userData } from '../../../dummydata'
import WidgetSm from '../../WidgetSm/WidgetSm'
import WidgetLg from '../../WidgetLG/WidgetLg'


function Home() {
  return (
    <div className='home'>
        <FeatureInfo/>
        <Charts data={userData} title="User Analytic" grid dataKey="ActiveUser"/>
        <div className="homewidegt">
            <WidgetSm/>
            <WidgetLg/>



            
        </div>
    </div>
  )
}

export default Home