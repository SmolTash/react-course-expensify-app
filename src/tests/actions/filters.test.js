import moment from'moment';
import {
    setStartDate, 
    setEndDate ,
    setTextFilter, 
    sortByDate , 
    sortByAmount
} from '../../actions/filters';

test ('setStartDate action object ' , () => {
    const action = setStartDate (moment(0));
    expect(action).toEqual ({
        type : 'SET_START_DATA',
        startDate: moment(0)
    });
});

test ('setEndDate action object ' , () => {
    const action = setEndDate (moment(0));
    expect(action).toEqual ({
        type : 'SET_END_DATA',
        endDate: moment(0)
    });
});

test ('setTextFilter action object with text value' , () => {
    const text = 'Rent'
    const action =setTextFilter (text);
    expect(action).toEqual ({
        type : 'SET_TEXT_FILTER',
        text
    });
});

test ('setTextFilter action object without text value' , () => {
    const action =setTextFilter ();
    expect(action).toEqual ({
        type : 'SET_TEXT_FILTER',
        text: ''
    });
});

test ('sortByDate action object' , () => {
    // const action = sortByDate ();
    // expect(action).toEqual ({
    //     type : 'SORT_BY_DATE'       
    // });
    expect ( sortByDate ()).toEqual ({ type : 'SORT_BY_DATE'})
});    

test ('sortByAmount action object' , () => {
    // const action = sortByAmount ();
    // expect(action).toEqual ({
    //     type : 'SORT_BY_AMOUNT'       
    // });
    expect ( sortByAmount ()).toEqual ({ type : 'SORT_BY_AMOUNT'})
});    