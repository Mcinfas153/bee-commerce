import { USER_LOGIN } from "../actionTypes/UserTypes"

const initialState = {
    isAuthenticated: localStorage.getItem('isLogged')
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state

    }
}

export default userReducer