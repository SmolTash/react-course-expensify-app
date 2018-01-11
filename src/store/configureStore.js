import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import expensesReduser from '../redusers/expenses';
import filterReduser from '../redusers/filters';
import thunk from 'redux-thunk';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
export default () => {
    const store = createStore (
        combineReducers ({
            expenses: expensesReduser,
            filters: filterReduser
        }), 
        composeEnhancers (applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) ;
    return store;
};