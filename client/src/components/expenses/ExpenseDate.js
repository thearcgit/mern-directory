
import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const year =props.date.getFullYear() ;
    const month =props.date.toLocaleString('en-US',{month: 'long'}) ;
    const day =props.date.toLocaleString('en-US',{day:'2-digit'}) ; 
    return (
        <div className="expense-date">
            <div className="expense-date_day">{day}</div>                
            <div className="expense-date_month">{month}</div>                
            <div className="expense-date_year">{year}</div>                
        </div>

    )

}

export default ExpenseDate