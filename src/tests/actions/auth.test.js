import { login, logout } from '../../actions/auth';
// import configureMockStore from 'redux-mock-store';

// const createMockStore = configureMockStore([thunk]);

test ('should generate login action object ', () => {
    const uid = '123abs';
    const action = login (uid);
    expect(action).toEqual ({
        type: 'LOGIN',
        uid
    });
});


test ('should generate logout action object ', () => {
    const action = logout ();
    expect(action).toEqual ({
        type: 'LOGOUT'        
    });
});