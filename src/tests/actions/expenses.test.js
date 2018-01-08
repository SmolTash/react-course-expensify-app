import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

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
    const expanseData = {
        description: 'Rent', 
        amount :109000 ,
        createdAt : 1000,
        note : 'last monhRent'       
    };
    const action = addExpense (expanseData);
    expect(action).toEqual ({
        type: 'ADD_EXPENSE',
        expense: {
            ...expanseData,
            id: expect.any (String)

        }
    });
});


test ('addExpense action object  with default value', () => {   
    const action = addExpense ();
    expect(action).toEqual ({
        type: 'ADD_EXPENSE',
        expense: {          
            id: expect.any (String),
            description : '', 
            note : '', 
            amount : 0 , 
            createdAt:  0  
        }
    })
});
    