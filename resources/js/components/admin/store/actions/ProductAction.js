import axios from "axios";
import { LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAILURE, SHOW_PRODUCT, SHOW_PRODUCT_FAILURE, SHOW_PRODUCT_SUCCESS } from "../actionTypes/ProductTypes";
import Product from '../api/product'

export function listProducts(categoryId) {
    return function (dispatch, getState) {
        console.log(categoryId)
        // start sending request (first dispatch)
        dispatch({
            type: LIST_PRODUCTS
        });
        Product.listProducts(categoryId)
            .then(function (response) {
                dispatch({
                    type: LIST_PRODUCTS_SUCCESS,
                    data: response.data.products
                });
            })
            .catch(function (error) {
                dispatch({
                    type: LIST_PRODUCTS_FAILURE,
                    error: error.response.msg
                });
            });
    }
}

export function viewProduct(productId) {
    return function (dispatch, getState) {
        dispatch({
            type: SHOW_PRODUCT
        })

        Product.viewProduct(productId)
            .then(function (response) {
                dispatch({
                    type: SHOW_PRODUCT_SUCCESS,
                    data: response?.data?.product
                })
            })
            .catch(function (error) {
                dispatch({
                    type: SHOW_PRODUCT_FAILURE,
                    error: error.response.msg
                });
            });
    }

}