import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'

const Budget = () => {

  const {budget ,dispatch} = useContext(AppContext);
  const [budgetedit , setbudgetedit] = useState(budget);
  const [click , setclick] = useState(false);
  
  const handleEditclick =() =>{
        setclick(true);
  }

  const budgetSubmitHandle =(budgetedit) =>{
   
    
   dispatch({
    type: 'SET_BUDGET',
    payload:budgetedit,
   });
   setclick(false);
  }
  return (
    <div className=' alert alert-secondary p-3 d-flex justify-content-between align-item-center'>
      

      {click ?( <>
        <input type="number"
        className='form-control mr-3'
          required='required'
          id='name'
          value={budgetedit}
          onChange={(event)=>setbudgetedit(event.target.value)} />
      
          <button type='button' onClick={()=>budgetSubmitHandle(budgetedit)} className='btn btn-primary '>Save</button>

        </>) : 
         ( <><span>Budget :{budget} </span>
         <button className='btn btn-primary ' onClick={handleEditclick}>Edit</button>
      </>)}

    </div>
  )
}

export default Budget
