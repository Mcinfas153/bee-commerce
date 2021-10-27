import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import productReducer from './ProductReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    products: productReducer
})

export default rootReducer