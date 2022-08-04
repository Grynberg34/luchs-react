import React from 'react';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { DeleteText } from '../actions';
import { GetTexts } from '../actions';
import { LogoutUser } from '../actions';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";
import SimpleDateTime  from 'react-simple-timestamp-to-date';

function User(props) {

  function deleteText(id) {
    store.dispatch(DeleteText(props.jwt, id))
  }

  function logout() {
    store.dispatch(LogoutUser())
  }
  
  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;
  var texts = props.texts;
  
  if (auth === true) {
    
    if (texts === null) {

      store.dispatch(GetTexts(props.jwt))
      
      return (
        <div></div>
      )
    } else {
      return (
  
        <div>
          <div>
            <Link  to="/user/criar">Novo texto</Link>
            { texts.map( (text) => 
              <div key={text.id}>

                <Link  to={`/user/textos/${text.id}`}>{text.titulo} | {text.categoria} |  <SimpleDateTime dateFormat="DMY" dateSeparator="/"  showTime="false">{text.data}</SimpleDateTime> | {text.autora}</Link> <button onClick={() => deleteText(text.id)}>DELETE</button>
              </div>
            )} 
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      )
    }


  } else {
    return (
      <Navigate to="/" />
    )
  }


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    auth: state.auth,
    texts: state.texts
  }
}

export default connect(
  mapStateToProps
)(User);

