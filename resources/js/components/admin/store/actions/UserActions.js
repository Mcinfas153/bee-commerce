import axios from "axios";
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes/UserTypes";

export function userLogin() {
    return function (dispatch, getState) {
        dispatch({
            type: USER_LOGIN
        })
    }
}