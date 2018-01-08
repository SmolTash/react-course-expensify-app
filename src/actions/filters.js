//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'   
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});

//SET_START_DATA
export const setStartDate = (startDate ) => ({
    type : 'SET_START_DATA',
    startDate
});
//SET_END_DATA
export const setEndDate = (endDate) => ({
    type : 'SET_END_DATA',
    endDate
});