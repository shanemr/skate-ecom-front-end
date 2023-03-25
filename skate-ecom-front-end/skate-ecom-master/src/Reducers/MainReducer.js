import CartReducer from "./CartReducer"
import ProductReducer from './ProductReducer'
import { combineReducers } from "redux"

const reducer = combineReducers({
    CartReducer,
    ProductReducer
})

export default reducer