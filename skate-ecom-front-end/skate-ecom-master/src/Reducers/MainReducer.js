import CartReducer from "./CartReducer"
import ProductReducer from './ProductReducer'
import CheckoutFormReducer from "./CheckoutFormReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    CartReducer,
    ProductReducer,
    CheckoutFormReducer
})

export default reducer