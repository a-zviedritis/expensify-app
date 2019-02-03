import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ hiddenExpenseCount, visibleExpenseCount, visibleExpensesTotal }) => {
  const hiddenExpenseWord = hiddenExpenseCount === 1 ? 'expense': 'expenses';
  const visibleExpenseWord = visibleExpenseCount === 1 ? 'expense': 'expenses';
  const formattedExpensesTotal = numeral(visibleExpensesTotal / 100).format('0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{visibleExpenseCount}</span> {visibleExpenseWord} totalling <span>€{formattedExpensesTotal}</span></h1>
        {hiddenExpenseCount > 0 && <p className="page-header__sub-title">{hiddenExpenseCount} {hiddenExpenseWord} filtered out</p>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    hiddenExpenseCount: state.expenses.length - visibleExpenses.length,
    visibleExpenseCount: visibleExpenses.length,
    visibleExpensesTotal: selectExpensesTotal(visibleExpenses),
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
