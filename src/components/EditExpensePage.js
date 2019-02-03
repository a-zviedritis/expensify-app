import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends React.Component {
  state = {
    expenseForRemoval: undefined
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  markForRemoval = () => {
    this.setState(() => ({
      expenseForRemoval: this.props.expense
    }));
  };
  handleConfirmRemoval = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  handleDenyRemoval = () => {
    this.setState(() => ({
      expenseForRemoval: undefined,
    }));
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button 
            className="button button--secondary"
            onClick={this.markForRemoval}
          >
            Remove Expense
          </button>
          <RemoveExpenseModal 
            expenseForRemoval={this.state.expenseForRemoval}
            handleConfirmRemoval={this.handleConfirmRemoval}
            handleDenyRemoval={this.handleDenyRemoval}
            history={this.props.history}
          />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);