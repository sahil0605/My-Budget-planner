import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../AppContext';
const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);

  const handleDeleteexpense = () =>{
      dispatch({
           type: 'DELETE_EXPENSE',
           payload:props.id,
      });
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-item-center'>
      {props.name}
      <div>
        <span className='mr-3'>
            ${props.cost}
           
        </span>
        <TiDelete onClick={handleDeleteexpense} size='1.5rem'></TiDelete>
        </div> 
    </li>
  )
}

export default ExpenseItem
