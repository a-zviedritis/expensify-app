import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense} 
      history={history} 
      expense={expenses[0]}/>
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle markForRemoval', () => {
  wrapper.find('button').simulate('click');

  expect(wrapper.state('expenseForRemoval')).toBe(expenses[0]);
});

test('should handle handleDenyRemoval', () => {
  wrapper.instance().handleDenyRemoval();

  expect(wrapper.state('expenseForRemoval')).toBeUndefined();
});

test('should handle handleConfirmRemoval', () => {
  wrapper.instance().handleConfirmRemoval();

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});