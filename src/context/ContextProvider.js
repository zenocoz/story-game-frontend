import React, { useState, useMemo } from "react";
import { UserContext } from ".";

const ContextProvider = ({ children }) => {
	//STATE

	const [playerId, setPlayerId] = useState(null);
	const [nickname, setNickname] = useState("");

	//CONTEXTS

	const playerIdContext = useMemo(
		() => ({ playerId, setPlayerId }),
		[playerId, setPlayerId]
	);

	const nicknameContext = useMemo(
		() => ({ nickname, setNickname }),
		[nickname, setNickname]
	);

	const context = {
		playerIdContext,
		nicknameContext,
	};
	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};
export default ContextProvider;
