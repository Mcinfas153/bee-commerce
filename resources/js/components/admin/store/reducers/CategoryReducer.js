import { LIST_CATEGORIES, LIST_CATEGORIES_FAILURE, LIST_CATEGORIES_SUCCESS, LIST_CATEGORY_PRODUCTS_FAILURE, LIST_CATEGORY_PRODUCTS_SUCCESS } from "../actionTypes/CategoryTypes";

const initialState = {
    categories: [],
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
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
                list_spinner: true
            };
        case LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: true
            };
        case LIST_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data
            }
        case LIST_CATEGORY_PRODUCTS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: true
            }
        default:
            return state;
    }
};
export default categoryReducer;