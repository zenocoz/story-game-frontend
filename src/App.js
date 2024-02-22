import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterPlayer from "./pages/EnterPlayer/EnterPlayer";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<EnterPlayer />} />
					{/* <Route exact path="/choose" element={<ChoosePath />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
