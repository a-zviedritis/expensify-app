import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default filter values', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    expenses[2],
  ]);
});

test('should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '999'
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  };
  const state = expenseReducer(undefined, action);

  expect(state).toEqual([
    expenses[0],
  ]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'New note'
    }
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    {
      ...expenses[1],
      note: 'New note'
    },
    expenses[2],
  ]);
});

test('should not edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '999',
    updates: {
      note: 'New note'
    }
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});