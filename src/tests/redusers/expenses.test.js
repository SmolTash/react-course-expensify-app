import expensesReduser from '../../redusers/expenses';
import expenses from '../fixtures/expenses';

test ('should set default state' , () =>{
    const state = expensesReduser (undefined , {type : '@@INIT'});
    expect (state).toEqual([]);
});

test ('should remove expense by id' , () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReduser (expenses, action);
    expect (state).toEqual([expenses[0], expenses[2]]);
});

test ('should not remove expense if  id not found' , () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReduser (expenses, action);
    expect (state).toEqual(expenses);
});

test ('should add an expanse' , () =>{
    const expenseItem = {
        id: '4',
        description: 'Test',
        note: 'new item',
        createdAt: 20000,
        amount: 300
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseItem
    };
    const state = expensesReduser (expenses, action);  
    expect (state).toEqual([...expenses, expenseItem]);
});

test ('should edit an expanse' , () =>{
    const amount = 1222000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };
    const state = expensesReduser (expenses, action);    
    expect (state[1].amount).toBe(amount);
});   

test ('should edit an expanse not found bu id ' , () =>{
    const amount = 1222000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    };
    const state = expensesReduser (expenses, action);    
    expect (state).toEqual(expenses);
});   

test ('should set expenses' , () => {
    const action ={
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReduser (expenses, action);    
    expect (state).toEqual([expenses[1]])
});