import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import indexReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    storage
};

const finalCreateStore =
    process.env.NODE_ENV === "development"
        ? applyMiddleware(logger)(createStore)
        : createStore;

const persistedReducer = persistReducer(persistConfig, indexReducer);

const store = finalCreateStore(persistedReducer);
const persistor = persistStore(store);
export { persistor };
export default store;
