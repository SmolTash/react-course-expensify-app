import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const formattedTotal = numeral( expensesTotal/100).format('$0,0.00');
    return (
        <div> 
        <p> 
            Viewing  {expensesCount } {expenseWord} totaling  {formattedTotal} 
        </p>       
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
