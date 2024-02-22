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

	addStory: async (title, numberOfSentences, sentence, topic) => {
		try {
			const config = {
				title,
				numberOfSentences,
				sentence,
				topic,
				headers: { "Content-type": "application/json" },
			};
			const response = await axios.post(
				"http://localhost:8080/stories",
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
	getStories: async () => {
		const config = {
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		};
		try {
			const response = await axios.get("http://localhost:8080/stories", config);
			if (response.statusText === "OK") {
				console.log("response", response);
				return response.data;
			} else {
				console.log("something wrong in getting the stories");
			}
		} catch (err) {
			console.log(err);
		}
	},
};
