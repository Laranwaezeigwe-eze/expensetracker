import ExpenseItem from "./ExpenseItem.js";
import '../'; 
import './ExpensesFilter.css';
import ExpensesFilter from './ExpensesFilter.js';
import { useState } from "react";
import ExpensesChart from "./ExpensesChart.js";


const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    };

     const filteredExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear
     })

    return (
        <div>
             <div className="expenses"> 
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
     {filteredExpenses.length === 0 ? (
     <p className="no_expenses">No expenses found</p>
     ) : (
     filteredExpenses.map((expense, i)=>(
        <div key={i}>
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
      />
      </div>
     ))
     )}
        </div>
        </div>
   
    )
}
export default Expenses;