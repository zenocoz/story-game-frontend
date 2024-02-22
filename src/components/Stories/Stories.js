import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Stories.css";
import Story from "../Story/Story";
import { getStories } from "../../store/story/reducer";

// import PlaylistsContainer from "../../components/playlists/PlaylistsContainer/PlaylistsContainer";
// import SearchResults from "../../components/shared/SearchResults/SearchResults";
// import PlaylistEditor from "../../components/playlists/PlaylistEditor/PlaylistEditor";
// import InstantiatedPlaylists from "../../components/playlists/InstantiatedPlaylists/InstantiatedPlaylists";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
// import PlayListModal from "../../components/playlists/PlayListModal/PlayListModal";

//context
import { UserContext as Context } from "../../context";
import StoryModal from "../StoryModal/StoryModal";

const Stories = () => {
	const navigate = useNavigate();
	//redux
	const { stories } = useSelector((state) => state.story);
	const dispatch = useDispatch();

	const [edited, setEdited] = useState(false);

	//context

	const { nicknameContext } = useContext(Context);
	const { nickname } = nicknameContext;

	useEffect(() => {
		dispatch(getStories());
	}, []);

	const editedPlaylist = (ed) => {
		setEdited(ed);
	};

	return (
		<>
			{" "}
			{nickname ? (
				<Container className="home-class">
					<NavBar />
					<Row className="mt-5">
						{/* <div className="centered">
							<Button
								// style={{ backgroundColor: "blue" }}

								onClick={() => {
									navigate("/stripes");
								}}
							>
								Create Story
							</Button>
						</div> */}
						<StoryModal />
					</Row>
					<Row className="mb-4">
						<Col md={3} className="mt-5"></Col>
					</Row>
					<Row className="mb-4">
						<Col md={3} className="mt-5">
							<h4>Active Stories</h4>
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<div className="d-flex justify-content-between">
								{/* <Button
									style={{ backgroundColor: "#471616" }}
									onClick={() => {
										navigate("/stripes");
									}}
								>
									Go to Stripes
								</Button>
								<Button
									style={{ backgroundColor: "#6c757d" }}
									onClick={() => {
										navigate("/users");
									}}
								>
									Go to Users
								</Button> */}
							</div>
						</Col>
						<Col md={3} className="mt-5">
							<h4>Completed Stories</h4>
						</Col>

						<Col>{/* <StoryModal /> */}</Col>
					</Row>
					<Row>
						<Col>
							{/* {playlistConfig._id && (
								<PlaylistEditor
									edited={edited}
									editedPlaylist={editedPlaylist}
									droppableId="droppie"
									draggableId="draggie"
								/>
							)} */}
						</Col>
					</Row>

					<Row className="searches">
						<Col md={6}>{/* <SearchSongs /> */}</Col>
						<Col>{/* <SearchResults editedPlaylist={editedPlaylist} /> */}</Col>
					</Row>
					<Row className="all-items">
						<Col>
							{/* <PlaylistsContainer editedPlaylist={editedPlaylist} /> */}
						</Col>
						<Col>
							{/* <InstantiatedPlaylists
								droppableId="dropInstance"
								draggableId="dragInstance"
							/> */}
						</Col>
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
