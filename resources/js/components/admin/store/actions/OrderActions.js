import { LIST_ORDERS, LIST_ORDERS_FAILURE, LIST_ORDERS_SUCCESS } from './../actionTypes/OrderTypes';
import Order from '../api/order';

export function listOrders() {
    return function (dispatch, getState) {
        // start sending request (first dispatch)
        dispatch({
            type: LIST_ORDERS
        });
        Order.listOrders()
            .then(function (response) {
                dispatch({
                    type: LIST_ORDERS_SUCCESS,
                    data: response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: LIST_ORDERS_FAILURE,
                    error: error.response.orders
                });
            });
    }
}