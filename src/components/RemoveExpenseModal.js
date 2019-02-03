import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
  <Modal 
    isOpen={!!props.expenseForRemoval}
    onRequestClose={props.handleDenyRemoval}
    contentLabel="Remove expense"
    closeTimeoutMS={50}
    className="modal"
  >
    <h3 className="modal__title">Remove expense?</h3>
    <div className="modal__selection">
      <button className="button" onClick={props.handleConfirmRemoval}>Yes</button>
      <button className="button" onClick={props.handleDenyRemoval}>No</button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;