import filtersReduser from '../../redusers/filters';
import moment from 'moment';

test ('setup default filter value' , () => {
    const state = filtersReduser (undefined ,  { type: '@@INIT'});
    expect (state).toEqual ({
        text: '',
        sortBy: 'date', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test ('set sortBy to amount' , () => {
    const state = filtersReduser (undefined ,  { type: 'SORT_BY_AMOUNT'});
    expect (state.sortBy).toBe ('amount');
});

test ('set sortBy to date' , () => {
    const currentState = {
        text: '',
        sortBy: 'amount', 
        startDate: undefined,
        endDate: undefined
    };
    const  action = { type: 'SORT_BY_DATE' };

    const state = filtersReduser (currentState , action);
    expect (state.sortBy).toBe ('date');
});


test ('set text filter' , () => { 
    const text = 'This is me filter'; 
    const  action = { 
        type: 'SET_TEXT_FILTER' , 
        text
    };
    const state = filtersReduser (undefined , action);
    expect (state.text).toBe (text);
});

test ('set startData filter' , () => { 
    const startDate = moment ();
    const  action = { 
        type: 'SET_START_DATA' , 
        startDate 
    };
    const state = filtersReduser (undefined , action);
    expect (state.startDate).toBe (startDate);
});

test ('set endData filter' , () => { 
    const endDate = moment ();
    const action = { 
        type: 'SET_END_DATA',
         endDate 
        };
    const state = filtersReduser (undefined , action);
    expect (state.endDate).toBe (endDate);
});