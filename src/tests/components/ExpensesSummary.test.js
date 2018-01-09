import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test ('hould correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow (<ExpensesSummary expensesCount={1} expensesTotal = {256} />);
    expect(wrapper).toMatchSnapshot();
});

test ('hould correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow (<ExpensesSummary expensesCount={13} expensesTotal = {789256} />);
    expect(wrapper).toMatchSnapshot();
}); 