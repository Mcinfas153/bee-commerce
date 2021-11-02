import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes/UserTypes";
import User from './../api/user';

export function userLogin(email, password) {
    return function (dispatch, getState) {
        dispatch({
            type: USER_LOGIN
        })

        User.login(email, password)
            .then(function (response) {
                if (response.data.status === true) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS,
                        data: response.data
                    })
                } else {
                    dispatch({
                        type: USER_LOGIN_FAILURE,
                        data: response.data
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
                dispatch({
                    type: USER_LOGIN_FAILURE,
                    data: error
                })
            });
    }
}