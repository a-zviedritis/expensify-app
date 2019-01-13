export default (expenses) => {
  return expenses
  .map((expense) => expense.amount)
  .reduce((total, expenseAmount) => total + expenseAmount, 0);
};