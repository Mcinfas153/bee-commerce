import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes/UserTypes";
import User from './../api/user';

export function userLogin(data) {
    return function (dispatch, getState) {
        dispatch({
            type: USER_LOGIN
        })

        User.login(data)
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