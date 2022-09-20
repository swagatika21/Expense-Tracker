import React from "react";
import './NewExp.css';
import ExpForm from "./ExpForm";

const NewExp=(props)=>{

const saveExpenseDataHAndler=(enteredExpData)=>{
    const expData={
        ...enteredExpData,
        id:Math.random().toString()

    }
    
    props.onAddExpense(expData);

    console.log(expData);

}
 return(
    <div className="new-expense">
    
        <ExpForm onSaveExpData={saveExpenseDataHAndler}/>
  
    </div>
 )
}

export default NewExp;