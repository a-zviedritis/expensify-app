import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';
import expenses from '../fixtures/expenses';

let handleDenyRemoval, handleConfirmRemoval, history, wrapper;

beforeEach(() => {
  handleDenyRemoval = jest.fn();
  handleConfirmRemoval = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <RemoveExpenseModal 
      handleDenyRemoval={handleDenyRemoval} 
      handleConfirmRemoval={handleConfirmRemoval} 
      history={history} 
      expenseForRemoval={expenses[0]}/>
  );
});

test('should render RemoveExpenseModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});