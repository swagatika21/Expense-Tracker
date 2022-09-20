import React, { useEffect, useState } from "react";
import Expenses from "./components/expenses";
import NewExp from "./components/NewExpenses/NewExp";

let Dummy_expenses=[];

const App=() =>{
 const[expenses,setExpenses]=useState(Dummy_expenses);
   /*useEffect(()=>{
    fetch('http://localhost:5000/api/expenses').then(
    response=>{
      return response.json()
    }
  ).then(
    data=>
    {
      console.log(data);
      setExpenses(data)
    }
  )
  },[])*/
  
  const addExpenseHandler = (exp) => {
    /*fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        body: JSON.stringify(exp),
        headers: {
            'content-Type' : 'application/json'
        }
    })*/

    const updatedExpenses=[exp,...expenses];
    setExpenses(updatedExpenses);
  }


  return (
    <div className="App">
      <NewExp onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
