import React from 'react';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { GetText } from '../actions';
import { EditText } from '../actions';
import { store } from '../store';
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import TextoForm from './TextoForm';

function Texto(props) {

  var { id } = useParams();

  var navigate = useNavigate();
  
  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }
  
  async function getTexts() {
    
    if (props.text === null) {
      await store.dispatch(GetText(props.jwt, id))
    }
  }

  getTexts();

  function submit(values) {
    store.dispatch(EditText(props.jwt, values, id))
    navigate('/user')
  }

  var auth =  props.auth;
  
  if (auth === true) {

    if (props.text !== null && props.text.id === parseInt(id)) {
      return (
        <div>
          <TextoForm onSubmit={submit}/>
          <Link  to="/user">Voltar</Link>
        </div>
      )
    } else {

      store.dispatch(GetText(props.jwt, id))

      return (
        <div></div>
      )
    }


  } else {
    return (
      <Navigate to="/login" />
    )
  }


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    auth: state.auth,
    text: state.text
  }
}

export default connect(
  mapStateToProps
)(Texto);

