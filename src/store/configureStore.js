import {createStore , combineReducers} from 'redux';
import expensesReduser from '../redusers/expenses';
import filterReduser from '../redusers/filters'


//Store creation

export default () => {
    const store = createStore (
        combineReducers ({
            expenses: expensesReduser,
            filters: filterReduser
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) ;
    return store;
}


