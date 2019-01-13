import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup REMOVE_EXPENSE action object', () => {
  const action = removeExpense({ id: 'abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc'
  });
});

test('should setup EDIT_EXPENSE action object', () => {
  const action = editExpense('abc', { note: 'New note' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      note: 'New note'
    }
  });
});

test('should setup ADD_EXPENSE action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Note'
  }
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup ADD_EXPENSE action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0 ,
      id: expect.any(String)
    }
  })
});