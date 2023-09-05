import { applyMiddleware} from "redux";
import reducer from "../Reducers/MainReducer";
import thunk from "redux-thunk";
import configureStore from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: thunk
});



export const persistor = persistStore(store);