import api from '../api/api';

// LOGIN

export const LogInUser = (user) => async dispatch => {
    
    await api.post('/login', user).then(function(response){
        console.log(response.data.token)
        dispatch({ type: 'LOGIN_USER', payload: response.data.token });
    }).catch(function(err){
        console.log(err.response);
        dispatch({ type: 'FAIL_LOGIN', payload: err.response.data.mensagem});
    })
    
};

export const CheckAuth = (token) => async dispatch => {

    await api.get('/user', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(function(response){
        if (response.data.id === 1) {
            var auth = true;
            dispatch({ type: 'CHECK_AUTH', payload: auth});
        } 
    })
    .catch(function(err){
        console.log(err)
    })

};

export const LogoutUser = () => async dispatch => {

    await dispatch({ type: 'LOGIN_USER', payload: null });
    await dispatch({ type: 'CHECK_AUTH', payload: false });

};


// TEXTOS

export const GetTexts = (token) => async dispatch => {

    await api.get('/user/textos', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(function(response){
        dispatch({ type: 'GET_TEXTS', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const GetText = (token, id) => async dispatch => {

    await api.get(`/user/textos/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(function(response){
        dispatch({ type: 'GET_TEXT', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const PostText = (token, info) => async dispatch => {

    await api.post('/user/criar', info, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(async function(){

        await api.get(`/user/textos`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }).then(function(response){
            dispatch({ type: 'GET_TEXTS', payload: response.data});
        })
        .catch(function(err){
            console.log(err)
        })
    })
    .catch(function(err){
        console.log(err)
    })

};

export const EditText = (token, info, id) => async dispatch => {

    await api.post(`/user/editar/${id}`, info, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(async function(){
        await api.get(`/user/textos`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }).then(function(response){
            dispatch({ type: 'GET_TEXTS', payload: response.data});
        })
        .catch(function(err){
            console.log(err)
        })

        await api.get(`/user/textos/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }).then(function(response){
            dispatch({ type: 'GET_TEXT', payload: response.data});
        })
        .catch(function(err){
            console.log(err)
        })

    })
    .catch(function(err){
        console.log(err)
    })

};

export const DeleteText = (token, id) => async dispatch => {

    await api.post('/user/deletar', {
        id: id
    }, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(async function(){
        await api.get(`/user/textos`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }).then(function(response){
            dispatch({ type: 'GET_TEXTS', payload: response.data});
        })
        .catch(function(err){
            console.log(err)
        })
    })
    .catch(function(err){
        console.log(err)
    })

};

export const GetLastTexts = () => async dispatch => {

    await api.get('/home/banner', {
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    })
    .then(function(response){
        dispatch({ type: 'GET_LAST_TEXTS', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const GetTextsE = () => async dispatch => {

    await api.get('/home/empresarias', {
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    })
    .then(function(response){
        dispatch({ type: 'GET_TEXTS_E', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const ShowAllTextsE = () => async dispatch => {

    dispatch({ type: 'SHOW_ALL_TEXTS_E', payload: true});

};

export const GetTextsM = () => async dispatch => {

    await api.get('/home/marketeiras' , {
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    })
    .then(function(response){
        dispatch({ type: 'GET_TEXTS_M', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const ShowAllTextsM = () => async dispatch => {

    dispatch({ type: 'SHOW_ALL_TEXTS_M', payload: true});

};

export const OpenCloseMenu = (open) => async dispatch => {

    dispatch({ type: 'OPEN_CLOSE_MENU', payload: open});

};

export const ShowTextById = (id) => async dispatch => {

    await api.get(`/home/texto/${id}`, {
    }).then(function(response){
        dispatch({ type: 'SHOW_TEXT_BY_ID', payload: response.data});
    })
    .catch(function(err){
        console.log(err)
    })

};

export const CheckText = (id) => async dispatch => {

    if (id === 0) {
        dispatch({ type: 'CHECK_TEXT', payload: true});
    } else {
        await api.get(`/home/texto/${id}`, {
        }).then(function(response){
            if (response.data === null) {
                dispatch({ type: 'CHECK_TEXT', payload: false});
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }

};