import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const ExpenseTotal = () => {

  const {expenses} = useContext(AppContext);
  const totalexpense = expenses.reduce((total,item)=>{
    return(total += item.cost);
  },0);
  return (
    <div className='alert alert-primary'>
      <span>Spent so far :$ {totalexpense}</span>
    </div>
  )
}

export default ExpenseTotal
