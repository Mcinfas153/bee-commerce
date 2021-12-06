import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes/UserTypes"

const initialState = {
    user: [],
    isAuthenticated: localStorage.getItem('user'),
    errorMsg: '',
    successMsg: '',
    loadSpenner: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loadSpenner: true
            }
        case USER_LOGIN_SUCCESS:
            localStorage.setItem('user', action.data.user.first_name)
            localStorage.setItem('token', action.data.token)
            return {
                ...state,
                user: action.data.user,
                isAuthenticated: true,
                successMsg: action.data.msg,
                errorMsg: '',
                loadSpenner: false
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                errorMsg: action.data.msg,
                successMsg: '',
                isAuthenticated: false,
                loadSpenner: false
            }
        default:
            return state
    }
}

export default userReducer