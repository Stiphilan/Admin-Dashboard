import React from 'react'
import './widgetlg.css'
function WidgetLg() {
    const Button=({type})=>{
        return <button className={'WigdetLgButton '+type}>{type}</button>
      }
  return (
    <div className='WidgetLg'>
        
    <h3 className="WidgetLgTitle">Latest Transcation</h3>
    <table className="WidgetLgTable">
      <tr className="WidgetLgTr">
        <th className="WidgetLgTh">Customer</th>
        <th className="WidgetLgTh">Date</th>
        <th className="WidgetLgTh">Amount</th>
        <th className="WidgetLgTh">Status</th>
</tr>
<tr className="WidgetLgTr">
<td className="WidgetLgUser">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className="WidgetUserImg" />
<span className="WidgetLgUserName">George Justin</span>
</td>
<td className="WidgetLgDate">9 feb 2023</td>
<td className="WidgetLgAmount">$200</td>
<td className="WidgetLgStatus"><Button type='Approved'/></td>
</tr>
<tr className="WidgetLgTr">
<td className="WidgetLgUser">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className="WidgetUserImg" />
<span className="WidgetLgUserName">George Justin</span>
</td>
<td className="WidgetLgDate">9 feb 2023</td>
<td className="WidgetLgAmount">$200</td>
<td className="WidgetLgStatus"><Button type='Declined'/></td>
</tr>
<tr className="WidgetLgTr">
<td className="WidgetLgUser">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className="WidgetUserImg" />
<span className="WidgetLgUserName">George Justin</span>
</td>
<td className="WidgetLgDate">9 feb 2023</td>
<td className="WidgetLgAmount">$200</td>
<td className="WidgetLgStatus"><Button type='Pending'/></td>
</tr>
<tr className="WidgetLgTr">
<td className="WidgetLgUser">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className="WidgetUserImg" />
<span className="WidgetLgUserName">George Justin</span>
</td>
<td className="WidgetLgDate">9 feb 2023</td>
<td className="WidgetLgAmount">$200</td>
<td className="WidgetLgStatus">
<Button type='Approved'/></td>
</tr>
    </table>
</div>
  )
}

export default WidgetLg