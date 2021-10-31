import { LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAILURE, SHOW_PRODUCT, SHOW_PRODUCT_FAILURE, SHOW_PRODUCT_SUCCESS } from "../actionTypes/ProductTypes";


const initialState = {
    products: [],
    product: {
        id: '',
        title: '',
        description: '',
        price: ''
    },
    list_spinner: false,
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
                list_spinner: false
            };
        case LIST_PRODUCTS_FAILURE:
            return {
                ...state,
                list_spinner: false
            };
        case SHOW_PRODUCT:
            return {
                ...state,
                list_spinner: true
            };
        case SHOW_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.data,
                list_spinner: false
            };
        case SHOW_PRODUCT_FAILURE:
            return {
                ...state,
                list_spinner: false
            };
        default:
            return state;
    }
};
export default productReducer;