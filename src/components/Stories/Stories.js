import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Stories.css";
import Story from "../Story/Story";
import { getStories } from "../../store/story/reducer";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

//context
import { UserContext as Context } from "../../context";
import StoryModal from "../StoryModal/StoryModal";

const Stories = () => {
	const navigate = useNavigate();
	//redux
	const { stories } = useSelector((state) => state.story);
	const dispatch = useDispatch();

	//context

	const { nicknameContext } = useContext(Context);
	const { nickname } = nicknameContext;

	useEffect(() => {
		dispatch(getStories());
	}, [stories.length]);

	return (
		<>
			{" "}
			{nickname ? (
				<Container className="home-class">
					<NavBar />
					<Row className="mt-5">
						<StoryModal />
					</Row>
					<Row className="mb-4">
						<Col md={3} className="mt-5"></Col>
					</Row>
					<Row className="mb-4">
						{stories.map((st) => (
							<Story story={st} />
						))}
					</Row>
				</Container>
			) : (
				<>
					<h3> To access editor please login </h3>
					<button
						onClick={() => {
							navigate("/");
						}}
					>
						Go back
					</button>
				</>
			)}
		</>
	);
};

export default Stories;
