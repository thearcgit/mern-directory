
import React,{useState} from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/expenses/NewExpenses/NewExpense';

let DUMMY_EXPENSES = [];

const App = () => {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES) 
    
    fetch("/getdoc")
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(err => console.log(`error is ${err}`))
    
    const addExpenseHandler = expense => {
        const updateExpense =[expense,...expenses]
        setExpenses(updateExpense)
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />                
            
        </div>
    )
}

export default App