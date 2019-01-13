export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export const sortBy = (sortBy) => ({
  type: 'SORT_BY',
  sortBy,
});

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});