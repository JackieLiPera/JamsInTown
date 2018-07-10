import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';


export const msp = (state) => ({
  errors: state.errors,
  formType: "login"
});

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(msp, mdp)(SessionForm);