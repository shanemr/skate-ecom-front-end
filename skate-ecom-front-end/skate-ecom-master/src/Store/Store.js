import { applyMiddleware, createStore } from "redux";
import reducer from "../Reducers/MainReducer";
import thunk from "redux-thunk";

const store = applyMiddleware(thunk)(createStore)(reducer)

export default store;