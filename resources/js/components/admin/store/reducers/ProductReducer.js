import { LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAILURE } from "../actionTypes/ProductTypes";

const initialState = {
    products: [],
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const productReducer = function (state = initialState, action) {
    switch (action.type) {
        case LIST_PRODUCTS:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data,
                list_spinner: true
            };
        case LIST_PRODUCTS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: true
            };
        default:
            return state;
    }
};
export default productReducer;