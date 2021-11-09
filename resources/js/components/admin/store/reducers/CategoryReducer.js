import { LIST_CATEGORIES, LIST_CATEGORIES_FAILURE, LIST_CATEGORIES_SUCCESS } from "../actionTypes/CategoryTypes";

const initialState = {
    categories: [],
    products: [],
    list_spinner: false,
};

const categoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case LIST_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.data,
                list_spinner: false
            };
        case LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                list_spinner: false
            };
        default:
            return state;
    }
};
export default categoryReducer;