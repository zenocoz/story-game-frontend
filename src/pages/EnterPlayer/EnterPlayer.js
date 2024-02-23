import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EnterPlayer.css";

//context
import { UserContext as Context } from "../../context";

const EnterPlayer = () => {
	//context

	const { playerIdContext, nicknameContext } = useContext(Context);
	const { setPlayerId } = playerIdContext;
	const { nickname, setNickname } = nicknameContext;

	const navigate = useNavigate();

	const addPlayer = async (e) => {
		e.preventDefault();
		try {
			const config = {
				nickname,
				headers: { "Content-type": "application/json" },
			};
			const response = await axios.post(
				"http://localhost:8080/players/add",
				config
			);
			if (response.status === 201) {
				console.log(`new player created`, response);
				setPlayerId(response.data.newPlayerId);

				navigate("/stories");
			} else {
				console.log(response);
				console.log("could not add player");
				alert("could not add player");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleKeypress = (e) => {
		if (e.keyCode === 13) {
			addPlayer(e);
		}
	};

	return (
		<div className="login">
			<div className="login__container">
				<form onKeyPress={handleKeypress}>
					<input
						type="text"
						className="login__textBox"
						value={nickname}
						onChange={(e) => setNickname(e.target.value)}
						placeholder="nickname"
					/>

					<button
						className="login__btn"
						onClick={(e) => {
							addPlayer(e);
						}}
					>
						Start Playing
					</button>
				</form>
			</div>
		</div>
	);
};
export default EnterPlayer;
