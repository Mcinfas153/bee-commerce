import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import productReducer from './ProductReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    products: productReducer,
    user: userReducer
})

export default rootReducer