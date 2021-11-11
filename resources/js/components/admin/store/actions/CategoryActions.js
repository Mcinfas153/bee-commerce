import {
    LIST_CATEGORIES,
    LIST_CATEGORIES_FAILURE,
    LIST_CATEGORIES_SUCCESS,
    LIST_CATEGOR_PRODUCTS,
    LIST_CATEGOR_PRODUCTS_SUCCESS,
    LIST_CATEGOR_PRODUCTS_FAILURE
} from "../actionTypes/CategoryTypes";
import Category from "../api/category";


export function listCategories(page) {
    return function (dispatch, getState) {
        // start sending request (first dispatch)
        dispatch({
            type: LIST_CATEGORIES
        });
        Category.listAll()
            .then(function (response) {
                dispatch({
                    type: LIST_CATEGORIES_SUCCESS,
                    data: response.data.categories
                });
            })
            .catch(function (error) {
                dispatch({
                    type: LIST_CATEGORIES_FAILURE,
                    error: error.response.categories
                });
            });
    }
}

export function getCategoryProducts(categoryId) {

    return function (dispatch, getState) {
        dispatch({
            type: LIST_CATEGOR_PRODUCTS
        });

        Category.getProducts(categoryId)
            .then(function (response) {
                dispatch({
                    type: LIST_CATEGOR_PRODUCTS_SUCCESS,
                    data: response.data.products
                });
            })
            .catch(function (error) {
                dispatch({
                    type: LIST_CATEGOR_PRODUCTS_FAILURE,
                    error: error.response.categories
                });
            });
    }
}