import * as actionTypes from "./actionTypes";
import { api } from "../../api";

const { SET_STORIES } = actionTypes;

export const initialState = {
	stories: [],
	// loading: false,

	// activePlaylists: [],

	// playlists: [],

	// playlistsIds: [],

	// playlistConfig: {
	// 	_id: null,
	// 	idSongCollection: null,
	// 	position: 0,
	// 	title: [],
	// 	songs: [],
	// 	songsIds: [],
	// 	content_preview: [],
	// 	highlighted_image_url: null,
	// 	titleForAllInstances: null,
	// 	numberOfSongs: 0,
	// 	numberOfLanguages: 0,
	// 	languages: [],
	// },
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case PLAYLIST_REQUESTED:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 	};

		// case ADD_PLAYLIST:
		// 	return { ...state, playlists: [...state.playlists, action.payload] };
		// case SET_PLAYLIST:
		// 	return {
		// 		...state,
		// 		playlistConfig: {
		// 			...state.playlistConfig,
		// 			...action.payload,
		// 			songsIds: action.payload.songs.map((s) => s.idSong),
		// 		},
		// 	};

		case SET_STORIES:
			return {
				...state,
				stories: action.payload,
			};

		// case GET_SINGLE_PLAYLIST:
		// 	return {
		// 		...state,
		// 		playlistConfig: {
		// 			...state.playlistConfig,
		// 			...action.payload,
		// 			songsIds: action.payload.songs.map((s) => s.idSong),
		// 			content_preview: action.payload.content_preview
		// 				? action.payload.content_preview
		// 				: [],
		// 			// languages: [
		// 			//   ...state.playlistConfig.languages,
		// 			//   action.payload.languages,
		// 			// ],
		// 		},
		// 	};

		// case REMOVE_PLAYLIST:
		// 	return {
		// 		...state,
		// 		playlistConfig: initialState.playlistConfig,
		// 	};

		// case UPDATE_PLAYLISTS:
		// 	return {
		// 		...state,
		// 		playlists: state.playlists.filter(
		// 			(pl) => pl.idSongCollection !== action.payload.id
		// 		),
		// 	};

		// case GET_ACTIVE_PLAYLISTS:
		// 	return {
		// 		...state,
		// 		activePlaylists: [...action.payload],
		// 	};
		// case CLEAR_ACTIVE_PLAYLISTS:
		// 	return {
		// 		...state,
		// 		activePlaylists: initialState.activePlaylists,
		// 	};

		// case UPDATE_ACTIVE_PLAYLISTS:
		// 	return {
		// 		...state,
		// 		activePlaylists: action.payload.map((ap, i) => {
		// 			return { ...ap, position: action.payload.length - i };
		// 		}),
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

// export const getSinglePlaylist = (data, params) => {
// 	return (dispatch) => {
// 		templateCall(data, params)
// 			.then((res) => {
// 				// const pl = res[0];
// 				dispatch({ type: GET_SINGLE_PLAYLIST, payload: res });
// 			})
// 			.catch((err) => console.log("error getting single playlist", err));
// 	};
// };

// export const addPlaylist = (data, params) => {
// 	return (dispatch) => {
// 		templateCall(data, params)
// 			.then((res) => {
// 				dispatch({ type: ADD_PLAYLIST, payload: res });
// 			})
// 			.catch((err) => console.log("error getting playlists", err));
// 	};
// };

// export const updatePlaylists = (data) => {
// 	return {
// 		type: UPDATE_PLAYLISTS,
// 		payload: data,
// 	};
// };

export default reducer;
