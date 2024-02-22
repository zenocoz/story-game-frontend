import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storyReducer from "./story/reducer";

import { initialState as storyInitialState } from "./story/reducer";

export const initialState = {
	story: storyInitialState,
};

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	story: storyReducer,
});

export default function configureStore() {
	return createStore(
		rootReducer,
		initialState,
		composedEnhancer(applyMiddleware(thunk))
	);
}
