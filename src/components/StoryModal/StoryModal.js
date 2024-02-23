import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../api";
import { Button, Modal, Form } from "react-bootstrap";
import { getStories } from "../../store/story/reducer";

//context
import { UserContext as Context } from "../../context";

const StoryModal = () => {
	//context
	const { playerIdContext, nicknameContext } = useContext(Context);
	const { playerId } = playerIdContext;
	const { nickname } = nicknameContext;

	const [title, setTitle] = useState("");
	const [sentenceInput, setSentenceInput] = useState("");

	const [topic, setTopic] = useState("");
	const [numberOfSentences, setNumberOfSentences] = useState(10);

	const [show, setShow] = useState(false);

	const dispatch = useDispatch();

	const handleClose = () => {
		setShow(false);
		setTitle("");
		dispatch(getStories());
	};
	const handleShow = async () => {
		setShow(true);
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSentenceChange = (e) => {
		setSentenceInput(e.target.value);
	};

	const handleSubmit = async () => {
		const response = await api.addStory(
			title,
			numberOfSentences,
			{ contributor: playerId, nickname, sentence: sentenceInput },
			topic
		);
		if (response) {
			handleClose();
		}
	};

	const renderFormInput = () => {
		return (
			<Form>
				<Form.Group className="mb-3" controlId="ControlInput1">
					<div className="d-flex justify-content-between">
						<Form.Label>Title: {title}</Form.Label>
						<div className="d-block">
							{/* <Form.Label>number of contributors</Form.Label> */}
						</div>
					</div>
					<div>
						<Form.Control
							type="text"
							value={title}
							// onBlur={() => {
							// }}
							onChange={(e) => {
								handleTitleChange(e);
							}}
							placeholder="enter a name for the story"
						/>
						<Form.Control
							as="textarea"
							aria-label="With textarea"
							value={sentenceInput}
							onChange={(e) => {
								handleSentenceChange(e);
							}}
						/>
					</div>
				</Form.Group>
			</Form>
		);
	};

	return (
		<>
			<div className="centered">
				<Button
					// style={{ backgroundColor: "blue" }}
					onClick={() => {
						handleShow();
					}}
				>
					Create Story
				</Button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title> New Story: id </Modal.Title>
				</Modal.Header>
				<Modal.Body>{renderFormInput()}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="primary"
						type="submit"
						onClick={() => {
							handleSubmit();
						}}
					>
						Save Story
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default StoryModal;
