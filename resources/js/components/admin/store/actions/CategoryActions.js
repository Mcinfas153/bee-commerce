import { LIST_CATEGORIES, LIST_CATEGORIES_FAILURE, LIST_CATEGORIES_SUCCESS } from "../actionTypes/CategoryTypes";
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