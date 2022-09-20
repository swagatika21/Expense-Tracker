import React, { useState } from "react";
import './ExpForm.css';
import './NewExp.css';

const ExpForm=(props)=>
{ 
  const[enteredTitle, setEnteredTitle]=useState('');
  const[enteredAmount, setEnteredAmount]=useState('');
  const[enteredDate, setEnteredDate]=useState('');


  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);}

  const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value);}

  const dateChangeHandler=(event)=>{
  setEnteredDate(event.target.value); }


 const submitHandler=(event)=>{
  event.preventDefault();

  const expenseData={
    title:enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
  }

  props.onSaveExpData(expenseData);
  console.log(expenseData);

  setEnteredAmount('');
  setEnteredTitle('');
  setEnteredDate('');


}

 return (
   <form onSubmit={submitHandler}>

     <div className="new-expense_controls">
       <div className="new-expense_control">
         <label>Title</label>
         <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
       </div>
       <div className="new-expense_control">
         <label>Amount</label>
         <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}></input>
       </div>
       <div className="new-expense_control">
         <label>Date</label>
         <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
       </div>
     </div>
     <div className="new-expense_actions">
       <button type="submit" onSubmit={submitHandler}>
         Add Expense
       </button>
     </div>
   </form>
 );
}
export default ExpForm;