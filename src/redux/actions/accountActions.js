import { LOGIN_USER } from './types';
import { parse } from 'path';
var moment = require('moment');

export const userLogin = (postData) => dispatch => {
  const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND : process.env.REACT_APP_DEV_BACKEND;
  return fetch(apiUrl + 'api/account/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Cookie': ''
    },
    body: JSON.stringify(postData)
  })
    .then(res => {
      if (res.status >= 400) {
        console.log(res);
        throw new Error("Backend Error with Status \"" + res.statusText + "\"");
      }
      return res.json();
    })
    .then(result => {
      if(result.status){
        var expMoment = moment().add(12, 'hours');
        window.localStorage.setItem('token', result['token']);
        window.localStorage.setItem('token_expire', expMoment.format('YYYY-MM-DD hh:mm:ss a'));
        window.localStorage.setItem('user', JSON.stringify(result['user']));
        dispatch({
          type: LOGIN_USER,
          payload: {
            status: true,
            isLogedIn: true,
            token: result['token'],
            message: result['message'],
            user: result['user']
          }
        });
      }else{
        dispatch({
          type: LOGIN_USER,
          payload: {
            status: true,
            isLogedIn: false,
            message: result['message'],
            user: null
          }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: LOGIN_USER,
        payload: {
          status: false,
          isLogedIn: false,
          message: "Backend error for now!",
          user: null
        }
      });
    });
};


export const userLogout = () => dispatch => {
  
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('token_expire');
  window.localStorage.removeItem('user');

  console.log("Logout Call")

  dispatch({
    type: LOGIN_USER,
    payload: {
      status: true,
      isLogedIn: false,
      token: '',
      message: '',
      user: null
    }
  });
};

export const userCheck = () => dispatch => {
  var token = window.localStorage.getItem('token');
  var token_expire_str = window.localStorage.getItem('token_expire');
  var user = window.localStorage.getItem('user');
  var token_expire = moment(token_expire_str, 'YYYY-MM-DD hh:mm:ss a', true);

  console.log("User Check  Call")

  if(token_expire_str != null && user != null && token_expire != null){
    if(token_expire < moment()){
  
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('token_expire');
      window.localStorage.removeItem('user');
    
      console.log("Logout Call")
    
      dispatch({
        type: LOGIN_USER,
        payload: {
          status: true,
          isLogedIn: false,
          token: '',
          message: '',
          user: null
        }
      });
    }else{
      dispatch({
        type: LOGIN_USER,
        payload: {
          status: true,
          isLogedIn: true,
          token: token,
          message: "Logged in already",
          user: JSON.parse(user)
        }
      });
    }
  }else{
    console.log("User Check  Failed")
  
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('token_expire');
    window.localStorage.removeItem('user');
  
    console.log("Logout Call")
  
    dispatch({
      type: LOGIN_USER,
      payload: {
        status: true,
        isLogedIn: false,
        token: '',
        message: '',
        user: null
      }
    });
  }
};