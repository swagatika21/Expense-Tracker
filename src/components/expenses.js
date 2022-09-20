import './expenses.css';
import ExpItem from './exp';

let Expenses=(props)=>{
    return(
        <div className='expenses'>
        { 
            props.item.map(
                expense=>(
                    <ExpItem 
                    date={expense.date} 
                   title={expense.title}
                   amount={expense.amount} />
                )
            )
        }
        </div>
    )

}

export default Expenses;