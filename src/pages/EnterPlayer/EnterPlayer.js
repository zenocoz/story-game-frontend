import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../api";
import "./EnterPlayer.css";

//context
import { UserContext as Context } from "../../context";

const EnterPlayer = () => {
	// const [msg, setMsg] = useState("");

	// const [err, setErr] = useState(null);
	const [nickname, setNickname] = useState("");

	//context

	const { playerContext } = useContext(Context);
	const { player, setPlayer } = playerContext;

	const navigate = useNavigate();

	const addPlayer = async (e) => {
		e.preventDefault();
		// await api.addPlayer(nickname);
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
				console.log(`new player created`);
				setPlayer(nickname);

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

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const response = await addPlayer(nickname);
	// 		console.log(response);
	// 	} catch (error) {
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// setErr(error);
	// 		console.log(errorCode);
	// 		console.log(errorMessage);
	// 	}
	// };

	// useEffect(() => {
	// 	if (err) {
	// 		console.log("err", err.code);
	// 		if (err.code === "auth/invalid-email") {
	// 			setMsg("WRONG OR MISSING EMAIL");
	// 		}
	// 		if (err.code === "auth/wrong-password") {
	// 			setMsg("WRONG PASSWORD");
	// 		}
	// 		if (err.code === "auth/user-not-found") {
	// 			setMsg("USER NOT FOUND");
	// 		}
	// 		if (err.code === "auth/internal-err") {
	// 			setMsg("ENTER PASSWORD");
	// 		}
	// 	}

	// 	if (user) {
	// 		navigate("/choose");
	// 	}
	// }, [user, err]);

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

				{/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
				{/* <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
				{/* <div className="login__error-msg">{msg && msg}</div> */}
			</div>
		</div>
	);
};
export default EnterPlayer;
