import './NewExpense.css';
import "./ExpenseForm.js"
import ExpenseForm from './ExpenseForm.js';
import {useState} from 'react';

const NewExpense =(props)=>{
    const [isEdit, setIsEdit] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEdit(false)
    };
     const editHandler = () =>{
        setIsEdit(true)
     };
      const cancelEdit = () =>{
        setIsEdit(false)
      }
    return(
        <div className='new-expense'>
            {!isEdit && (
            <button onClick={editHandler}>Add New Expense</button>)}
           {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelEdit}/> }
        </div>
    )
} 
export default NewExpense;