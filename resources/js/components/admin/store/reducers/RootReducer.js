import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import productReducer from './ProductReducer';
import userReducer from './UserReducer';
import orderReducer from "./OrderReducres";

const rootReducer = combineReducers({
    category: categoryReducer,
    products: productReducer,
    user: userReducer,
    order: orderReducer
})

export default rootReducer