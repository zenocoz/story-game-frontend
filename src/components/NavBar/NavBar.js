import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//context
import { UserContext as Context } from "../../context";
import "./NavBar.css";

const NavBar = () => {
	const navigate = useNavigate();

	//context

	const { nicknameContext } = useContext(Context);
	const { nickname } = nicknameContext;

	const logout = () => {
		navigate("/");
	};

	return (
		<>
			<Navbar style={{ backgroundColor: "#000000" }} variant="dark">
				<Container>
					<Navbar.Brand href="#home">Stories Game</Navbar.Brand>
					<Nav className="items justify-content-between">
						<div className="navbar-items">
							<h6 className="user">{nickname}</h6>

							<button
								onClick={() => {
									logout();
								}}
							>
								Log Out
							</button>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
