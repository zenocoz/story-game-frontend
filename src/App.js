import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterPlayer from "./pages/EnterPlayer/EnterPlayer";
import Stories from "./components/Stories/Stories";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<EnterPlayer />} />
					<Route exact path="/stories" element={<Stories />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
