import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenseCount={2} visibleExpensesTotal={123123}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly when no expenses', () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenseCount={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly when filtered out expenses', () => {
  const wrapper = shallow(<ExpensesSummary hiddenExpenseCount={1} visibleExpenseCount={2} visibleExpensesTotal={123123}/>);
  expect(wrapper).toMatchSnapshot();
});