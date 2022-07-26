import React from 'react';
import CriarTextoForm from './CriarTextoForm';
import { CheckAuth } from '../actions';
import { PostText } from '../actions';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link, Navigate, useNavigate } from "react-router-dom";

function CriarTexto(props) {

  var navigate = useNavigate();

  function submit(values) {
    store.dispatch(PostText(props.jwt, values))
    navigate('/user')
  }

  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;

  if (auth === true) {
    return (
      <div>
        <CriarTextoForm onSubmit={submit} />
        <Link  to="/user">Voltar</Link>
      </div>
    )
  } else {
    
    return (
      <Navigate to="/login" />
    )

  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jwt: state.jwt,
    texts: state.texts
  }
}

export default connect(
  mapStateToProps
)(CriarTexto);

