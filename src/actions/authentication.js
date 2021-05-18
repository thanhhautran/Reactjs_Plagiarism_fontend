import {LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,REGISTER_FAIL,REGISTER_SUCCESS, SET_MESSAGE} from './antonations';
import authApi from '../api/auth.api';

export const register = (username,email,password) => (dispacth) =>{
    return authApi.register(username,email,password).then(
        (response) => {
            dispacth({
                type: REGISTER_SUCCESS,
            });
            dispacth({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            console.log(response);
            return Promise.resolve();
        },
        (error) =>{
            const message = (
                error.response && error.response.data
                && error.response.data.message)|| error.message || 
                error.toString();
            dispacth({
                type: REGISTER_FAIL,
            });
            dispacth({
                type: SET_MESSAGE,
                payload: message,
            });
            console.log(error.response.data.error);
            return Promise.reject();
        }
    );
};
export const login = (username, password) => (dispatch) => {
    return authApi.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  export const logout = () => (dispatch) => {
    authApi.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };