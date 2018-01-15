import {startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test ('remove expense action object ', () => {
    const action = removeExpense ({id: '123abs'});
    expect(action).toEqual ({
        type: 'REMOVE_EXPENSE',
        id: '123abs'
    })
});

test ('edit expense action object ', () => {
    const action = editExpense ('123abc', {description: 'some description', note: 'some note'});
    expect(action).toEqual ({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {            
            description: 'some description', 
            note: 'some note'
        }
    })
});

test ('addExpense action object  with provided value', () => {
    const action = addExpense (expenses[2]);
    expect(action).toEqual ({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test ('should add expense to db and store', (done) => {   
    const store  = createMockStore({});
    const expenseDate = {
        description : 'Mouse', 
        note : 'This one is better', 
        amount : 3000 , 
        createdAt: 100  
    };

    store.dispatch (startAddExpense(expenseDate)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any (String),
                ... expenseDate
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');     
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseDate);
        done();
    });  
});  

test ('should add expense with default value to db and store', (done) => {   
    const store  = createMockStore({});
    const expenseDefaults = {
        description: '', 
        note: '', 
        amount: 0 , 
        createdAt: 0
    };

    store.dispatch (startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any (String),
                ... expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');     
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });  
}); 

test ('should setup set expense action with data ', () => {
    const action = setExpenses (expenses);
    expect(action).toEqual ({
        type: 'SET_EXPENSES',
        expenses
    })
});

test ('should fetch the expenses from firebase', () =>{
    const store  = createMockStore({});
    store.dispatch(startSetExpenses()).then (() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual ({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test ('addExpense action object  with default value', () => {   
//     const action = addExpense ();
//     expect(action).toEqual ({
//         type: 'ADD_EXPENSE',
//         expense: {          
//             id: expect.any (String),
//             description : '', 
//             note : '', 
//             amount : 0 , 
//             createdAt:  0  
//         }
//     })
// });
    