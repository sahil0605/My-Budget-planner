import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
const Remaining = () => {

  const {budget , expenses} = useContext(AppContext);

  const totalexpense = expenses.reduce((total,item)=>{
    return ( total = total + item.cost);
  },0);

  const alertType = totalexpense > budget ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining : ${budget - totalexpense}</span>
    </div>
  )
}

export default Remaining
