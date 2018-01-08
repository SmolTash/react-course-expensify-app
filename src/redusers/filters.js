import moment from 'moment';

//filter REduser

const filtersReduserDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReduserDefaultState, action) => {
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
