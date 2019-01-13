import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    {
      expenseCount === 0 ? (
        <p>No expenses to view</p>
      ) : (
        <p>Viewing {expenseCount} expense{expenseCount > 1 ? 's': ''} totalling €{numeral(expensesTotal / 100).format('0,0.00')}</p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
