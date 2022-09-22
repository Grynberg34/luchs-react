import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


//LOGIN

const userLogInReducer = (jwt = null, action) => {
  if (action.type === 'LOGIN_USER') {

    return action.payload;
    
  }
  
  return jwt;
};

const failedLogInReducer = (msg = '', action) => {
  if (action.type === 'FAIL_LOGIN') {

    return action.payload;
    
  }
  
  return msg;
};

//AUTH

const checkAuthReducer = (auth = false, action) => {
  if (action.type === 'CHECK_AUTH') {

    return action.payload;
  }
  
  return auth;
};


// GET TEXTS

const getTextsReducer = (texts = null, action) => {
  if (action.type === 'GET_TEXTS') {

    return action.payload;
    
  }
  
  return texts;
};

const getTextReducer = (text = null, action) => {
  if (action.type === 'GET_TEXT') {

    return action.payload;
    
  }
  
  return text;
};

const getLastTextReducer = (last = null, action) => {
  if (action.type === 'GET_LAST_TEXT') {

    return action.payload;
    
  }
  
  return last;
};

const getEmpTextsReducer = (texts_emp = null, action) => {
  if (action.type === 'GET_TEXTS_E') {

    return action.payload;
    
  }
  
  return texts_emp;
};

const showAllEmpTextsReducer = (show_emp = false, action) => {
  if (action.type === 'SHOW_ALL_TEXTS_E') {

    return action.payload;
    
  }
  
  return show_emp;
};

const getMarTextsReducer = (texts_mar = null, action) => {
  if (action.type === 'GET_TEXTS_M') {

    return action.payload;
    
  }
  
  return texts_mar;
};

const showAllMarTextsReducer = (show_mar = false, action) => {
  if (action.type === 'SHOW_ALL_TEXTS_M') {

    return action.payload;
    
  }
  
  return show_mar;
};

const openCloseMenuReducer = (open = false, action) => {
  if (action.type === 'OPEN_CLOSE_MENU') {

    return action.payload;
    
  }
  
  return open;
};

const showTextByIdReducer = (text = null, action) => {
  if (action.type === 'SHOW_TEXT_BY_ID') {

    return action.payload;
    
  }
  
  return text;
};


export default combineReducers({

  jwt: userLogInReducer,
  auth: checkAuthReducer,
  fail: failedLogInReducer,
  texts: getTextsReducer,
  text: getTextReducer,
  last: getLastTextReducer,
  texts_emp: getEmpTextsReducer,
  show_emp: showAllEmpTextsReducer,
  texts_mar: getMarTextsReducer,
  show_mar: showAllMarTextsReducer,
  open: openCloseMenuReducer,
  textById: showTextByIdReducer,
  form: formReducer
  
});
