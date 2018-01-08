// console.log ('redux-expencify');
import { createStore , combineReducers  } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0 , 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id 
});

//EDIT_EXPENSE
const editExpense  = (id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'   
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});

//SET_START_DATA
const setStartDate = (startDate ) => ({
    type : 'SET_START_DATA',
    startDate
});
//SET_END_DATA
const setEndDate = (endDate) => ({
    type : 'SET_END_DATA',
    endDate
});

//Expenses reduser
const expensesReduserDefaultState = [];
const expensesReduser = (state = expensesReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
            //return state.concat (action.expense);
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE' :
            return state.filter(({id}) => id !==action.id);
        case 'EDIT_EXPENSE':
            return  state.map ((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            })
        default: 
         return state;
    }
};


//filter REduser
const filtersReduserDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};

const filterReduser = (state = filtersReduserDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT' : 
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATA' :
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATA' :
            return {
                ...state,
               endDate: action.endDate
            }
        default:
            return state;
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate ;       
        const textMatch = expense.description.toLowerCase ().includes (text.toLowerCase ());

        return startDateMatch && endDateMatch && textMatch;
    }).sort ((a , b ) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};


//Store creation

const store = createStore (
    combineReducers ({
        expenses: expensesReduser,
        filters: filterReduser
    })
) ;

store.subscribe ( () => {
    const state = store.getState ();

    const visivleExpenses = getVisibleExpenses (state.expenses, state.filters);

    console.log (visivleExpenses);
});

const expenseOne = store.dispatch (addExpense ({description: 'rent' , amount: 100, createdAt : 1000}));
const expenseTwo = store.dispatch (addExpense ({description: 'coffe' , amount: 300 , createdAt: -1000 }));

// store.dispatch (removeExpense ({id: expenseOne.expense.id}));
// store.dispatch (editExpense (expenseTwo.expense.id, { amount : 500}));

// store.dispatch (setTextFilter ('ffe'));
// store.dispatch (setTextFilter (''));

store.dispatch (sortByAmount ());
// store.dispatch (sortByDate ());

// store.dispatch (setStartDate (0));
// store.dispatch (setStartDate ());
// store.dispatch (setEndDate (999));

const demoState = {
    expenses: [{
        id: 'id1',
        description: 'Jaunary Rent',
        note: 'This was a final payment for that address',
        amount: 54500,
        createdAt: 0
    }], 
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jane',
//     age: 24 
// };


// console.log ({
//     ...user,
//     location : 'UA',
//     age: 30
// });