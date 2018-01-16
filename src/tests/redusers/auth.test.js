import authReduser from '../../redusers/auth';

test ('should set uid for login' , () => {
    const uid = '123qwert';
    const  action = { 
        type: 'LOGIN' , 
        uid
    };
    const state = authReduser ({}, action);
    expect (state.uid).toBe (uid);
});

test ('should clear uid for logout' , () => { 
    const  action = { 
        type: 'LOGOUT' 
    };
    const state = authReduser ({uid: 'abs023'}, action);
    expect (state).toEqual({});
});