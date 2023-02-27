// import React, { useContext, useState } from 'react'
// import { AppContext } from '../AppContext';
// import {v4 as uuidv4} from 'uuid'

// const AddExpenseForm = (props) => {

//     const {dispatch} = useContext(AppContext);
//     const [name , setname] = useState('');
//     const [cost , setcost] = useState('');

//     const onSubmit=(event) =>{
//         event.preventDefault();

//         const expense ={
//             id: uuidv4(),
//             name:name,
//             cost:parseInt(cost),
//         };

//         dispatch({
//             type:'ADD EXPENSE',
//             payload:expense,
//         });
//         setname('');
//         setcost('');

        
//     }
//   return (
//    <form onSubmit={onSubmit}>
//     <div className='row'>
//         <div className='col-sm'>
//            <label htmlFor="name">Name</label>
//            <input type="text" 
//            required='required'
//            className='form-control'
//            id='name'
//            value={name}
//            onChange={(event) => setname(event.target.value)}
//             />
//         </div>

//         <div className='col-sm'>
//            <label htmlFor="cost">Cost</label>
//            <input type="text" 
//            required='required'
//            className='form-control'
//            id='cost'
//            value={cost}
//            onChange={(event) => setcost(event.target.value)}
//             />
//         </div>

//         <div className='col-sm mt-4'>
//             <button type='submit' className='btn btn-primary'>Save</button>
//         </div>
//     </div>
//    </form>
//   )
// }

// export default AddExpenseForm


import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
