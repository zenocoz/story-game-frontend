import React, { useState, useMemo } from "react";
import { UserContext } from ".";

const ContextProvider = ({ children }) => {
	//STATE

	const [playerId, setPlayerId] = useState(null);
	const [nickname, setNickname] = useState("");
	// const [headers, setHeaders] = useState(null);
	// const [stripeLangs, setStripeLangs] = useState({});
	// const [checkedIfActivePlaylists, setCheckedIfActivePlaylists] = useState([]);

	//CONTEXTS

	const playerIdContext = useMemo(
		() => ({ playerId, setPlayerId }),
		[playerId, setPlayerId]
	);

	const nicknameContext = useMemo(
		() => ({ nickname, setNickname }),
		[nickname, setNickname]
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
		playerIdContext,
		nicknameContext,
	};
	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};
export default ContextProvider;
