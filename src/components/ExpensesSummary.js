import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const formattedTotal = numeral( expensesTotal/100).format('$0,0.00');
    return (
        <div className = "page-header" > 
            <div className = "content-container" > 
                <h1 className= "page-header__title"> 
                    Viewing <span>{expensesCount }</span> {expenseWord} totaling <span>{formattedTotal} </span>
                </h1> 
                <div className="page-header__actions">
                    <Link className = "button" to = "/create" >Add Expanse</Link> 
                </div>  
            </div>   
        </div>
    );   
};

const mapStateToProps =  (state) => {
    const  expenses = selectExpenses (state.expenses, state.filters)    
    return {
        expensesCount: expenses.length,          
        expensesTotal: selectExpensesTotal (expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
