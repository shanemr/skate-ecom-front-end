import CartReducer from "./CartReducer"
import ProductReducer from './ProductReducer'
import CheckoutFormReducer from "./CheckoutFormReducer"
import AuthReducer from "./AuthReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    CartReducer,
    ProductReducer,
    CheckoutFormReducer,
    AuthReducer
})

export default reducer