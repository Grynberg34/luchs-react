import React from 'react';
import LoginForm from './LoginForm';
import { LogInUser } from '../actions';
import { CheckAuth } from '../actions';
import { connect } from 'react-redux';
import { store } from '../store';
import { Navigate } from "react-router-dom";

function Login(props) {


  function submit (values) {

    store.dispatch(LogInUser(values))

  }

  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else {

    return (
      <div>
        <LoginForm onSubmit={submit} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jwt: state.jwt,
  }
}

export default connect(
  mapStateToProps
)(Login);

