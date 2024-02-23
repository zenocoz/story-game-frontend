import * as actionTypes from "./actionTypes";
import { api } from "../../api";

const { SET_STORIES } = actionTypes;

export const initialState = {
	stories: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STORIES:
			return {
				...state,
				stories: action.payload,
			};

		// case UPDATE_STORY:
		// 	return {

		// 	};

		default:
			return state;
	}
};

export const getStories = () => {
	return (dispatch) =>
		api
			.getStories()
			.then((res) => {
				dispatch({ type: SET_STORIES, payload: res });
			})
			.catch((err) => console.log("error getting stories", err));
};

export default reducer;
