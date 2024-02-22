import React, { useState, useEffect, useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
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
	const [numberOfSentences, setNumberOfSentences] = useState(1);

	const [showSaveTitle, setShowSaveTitle] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
		setTitle("");
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
		await api.addStory(
			title,
			numberOfSentences,
			{ contributor: playerId, sentence: sentenceInput },
			topic
		);
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
							onBlur={() => {
								// updateLangTitle();
								// checkStringThenUpdateLangTitle(title);
							}}
							onChange={(e) => {
								// setShowSaveTitle(true);
								handleTitleChange(e);
							}}
							placeholder="enter a name for the story"
						/>
						<Form.Control
							as="textarea"
							aria-label="With textarea"
							value={sentenceInput}
							onChange={(e) => {
								// setShowSaveTitle(true);
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
						// navigate("/stripes");
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
				<Modal.Body>
					{renderFormInput()}
					<div className="d-flex">former languages</div>
					<div className="d-flex">also languages formerly</div>
				</Modal.Body>
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
