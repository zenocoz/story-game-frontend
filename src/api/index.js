import axios from "axios";

export const api = {
	addPlayer: async (nickname) => {
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
			} else {
				console.log(response);
				console.log("could not add player");
			}
		} catch (err) {
			console.log(err);
		}
	},
};
