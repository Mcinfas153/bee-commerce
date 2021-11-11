import {
    LIST_CATEGORIES,
    LIST_CATEGORIES_FAILURE,
    LIST_CATEGORIES_SUCCESS,
    LIST_CATEGOR_PRODUCTS,
    LIST_CATEGOR_PRODUCTS_FAILURE,
    LIST_CATEGOR_PRODUCTS_SUCCESS
} from "../actionTypes/CategoryTypes";

const initialState = {
    categories: [1, 2],
    products: [],
    listSpinner: false,
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
        case LIST_CATEGOR_PRODUCTS:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_CATEGOR_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data,
                list_spinner: false
            }
        case LIST_CATEGOR_PRODUCTS_FAILURE:
            return {
                ...state,
                products: action.data,
                list_spinner: false
            }
        default:
            return state;
    }
};
export default categoryReducer;