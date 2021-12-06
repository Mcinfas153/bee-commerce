import { LIST_ORDERS, LIST_ORDERS_SUCCESS, LIST_ORDERS_FAILURE } from "../actionTypes/OrderTypes";

const initialState = {
    orders: [],
    orderCount: 0,
    todayOrders: 0,
    listSpinner: false
}

const orderReducer = function (state = initialState, action) {
    switch (action.type) {
        case LIST_ORDERS:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.data.orders,
                orderCount: action.data.orderCount,
                todayOrders: action.data.todayOrders,
                listSpinner: false
            };
        case LIST_ORDERS_FAILURE:
            return {
                ...state,
                listSpinner: false
            };
        default:
            return state;
    }
}

export default orderReducer;