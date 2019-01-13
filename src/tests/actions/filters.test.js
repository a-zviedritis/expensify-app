import moment from 'moment';
import { setStartDate, setEndDate, sortBy, setTextFilter } from '../../actions/filters';

test('should generate SET_START_DATE action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate SET_END_DATE action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate SORT_BY action object', () => {
  const action = sortBy('amount');

  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'amount'
  });
});

test('should generate SET_TEXT_FILTER action object', () => {
  const action = setTextFilter('abc');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'abc'
  });
});

test('should generate SET_TEXT_FILTER action object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});