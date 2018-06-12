import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (// passing in selectedOption via React props; selectedOption was defined in state in IndecisionApp
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={200} // 200 milliseconds
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;

