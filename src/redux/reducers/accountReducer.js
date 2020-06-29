import { LOGIN_USER } from '../actions/types';

const initialState = {
  loginStatus: {
    status: true,
    isLogedIn: true,
    token: '',
    message: 'Not login yet',
    user: null
  }
};

export const account = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginStatus: action.payload
      };
    default:
      return state;
  }
};
