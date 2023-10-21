import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import themeReducer from "../reducers/ThemeReducer";
import reduxStorage from "core/redux-storage";
import accountReducer from "redux/reducers/AccountReducer";
const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  userAccount: accountReducer,
  themeReducer: themeReducer,
});

//* white list only those reducers which needs to be stored locally.
const persistConfig = {
  key: "@chat",
  storage: reduxStorage,
  whitelist: ["themeReducer"],
};

const presistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(presistedReducer, undefined, middleware);
const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export { persistor, store };
