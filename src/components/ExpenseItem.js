import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem =(props) =>{
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();   
    
    return (
        <div>
        <div className='expense-item'>
            <div className='expense_date'>
                <div className='expense-month'>{month}</div>
                <div className='expense-day'>{day}</div>
                <div className='expense-year'>{year}</div>
            </div>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
            </div>
            {/* <div>
                <button onClick={clickHandler}>Change Item</button>                
            </div> */}
        </div>
        </div>
    )
}
export default ExpenseItem; 