import React, { useState, useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./Story.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { getStories } from "../../store/story/reducer";

//context
import { UserContext as Context } from "../../context";

const Story = (props) => {
	//context
	const { playerIdContext, nicknameContext } = useContext(Context);
	const { playerId } = playerIdContext;
	const { nickname } = nicknameContext;

	const [edit, setEdit] = useState(false);
	const [saveString, setSaveString] = useState(false);
	const [string, setString] = useState("");

	const dispatch = useDispatch();

	const handleStringeEdit = (e) => {
		setString(e.target.value);
	};

	const updateStory = async (storyId) => {
		const updated = await api.modifyStory(storyId, {
			contributor: playerId,
			nickname,
			sentence: string,
		});
	};

	const update = () => {
		dispatch(getStories());
	};

	const renderFormInput = () => {
		return (
			<Form>
				<Form.Group className="mb-3" controlId="ControlInput1">
					<div className="d-flex">
						{saveString && (
							<FontAwesomeIcon
								icon={faSave}
								onClick={() => {
									updateStory(props.story._id);
									setEdit(false);
								}}
							/>
						)}
						<Form.Control
							type="text"
							value={string}
							// onBlur={() => {
							// }}
							onChange={(e) => {
								setSaveString(true);
								handleStringeEdit(e);
							}}
							placeholder="add a new sentence here"
						/>
					</div>
				</Form.Group>
			</Form>
		);
	};

	return (
		<div>
			<Card
				style={{
					minWidth: "18rem",
					backgroundColor: "#808080",
					marginBottom: "1rem",
				}}
			>
				<Card.Body>
					<div className="pill-pl-home">
						{props.story.sentences.length < props.story.numberOfSentences
							? "ACTIVE"
							: "COMPLETED"}
					</div>

					<Card.Title>{props.story.title}</Card.Title>

					<div className="d-flex">
						{props.story.sentences.map((sent) => {
							return (
								<div className="sentence">
									<Card.Text>{sent.sentence} </Card.Text>
									<div className="pill-pl-nickname">{sent.nickname}</div>
								</div>
							);
						})}
					</div>
					{edit && renderFormInput()}
					<Card.Text>Max Sentences {props.story.numberOfSentences}</Card.Text>

					<Button
						variant="primary"
						onClick={() => {
							setEdit(true);
						}}
					>
						Edit
					</Button>
					<FontAwesomeIcon
						icon={faRotateLeft}
						onClick={() => {
							update();
						}}
					/>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Story;
