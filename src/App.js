import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';
 
const App=()=> {
  const dummy_expenses =[
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      title: 'New Television',
      amount: 799.50,
      date: new Date(2020, 8, 14)
    },
    {
      title: 'Groceries',
      amount: 90.00,
      date: new Date(2021, 7, 20)
    },
    {
      title: 'Car Insurance ',
      amount: 125.00,
      date: new Date(2019, 7, 28)
    },
  ];

  const [expenses, setExpenses]= useState(dummy_expenses)

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      const updatedExpenses= [expense, ...prevExpenses]
      console.log('this is it:', updatedExpenses)
      return updatedExpenses
    })
    // console.log('in app.js')
    // console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
