import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
