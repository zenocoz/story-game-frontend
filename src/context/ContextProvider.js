import React, { useState, useMemo } from "react";
import { UserContext } from ".";

const ContextProvider = ({ children }) => {
	//STATE

	const [player, setPlayer] = useState(null);
	// const [headers, setHeaders] = useState(null);
	// const [stripeLangs, setStripeLangs] = useState({});
	// const [checkedIfActivePlaylists, setCheckedIfActivePlaylists] = useState([]);

	//CONTEXTS

	const playerContext = useMemo(
		() => ({ player, setPlayer }),
		[player, setPlayer]
	);

	// const headersContext = useMemo(
	// 	() => ({ headers, setHeaders }),
	// 	[headers, setHeaders]
	// );
	// const stripeLangsContext = useMemo(
	// 	() => ({ stripeLangs, setStripeLangs }),
	// 	[stripeLangs, setStripeLangs]
	// );

	// const activePlaylistsContext = useMemo(
	// 	() => ({ checkedIfActivePlaylists, setCheckedIfActivePlaylists }),
	// 	[checkedIfActivePlaylists, setCheckedIfActivePlaylists]
	// );

	const context = {
		playerContext,
	};
	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};
export default ContextProvider;
