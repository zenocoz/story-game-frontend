import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Story.css";

const Story = () => {
	return (
		<div>
			<Card
				style={{
					width: "18rem",
					backgroundColor: "#808080",
					marginBottom: "1rem",
					// opacity: props.playlist.active ? "1" : "0.5",
				}}
			>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					{/* <div className="pill-pl-home">
						<FontAwesomeIcon icon={faHouse} />
					</div> */}

					<Card.Title>Title</Card.Title>

					<Card.Text>TEXT SENTENCES</Card.Text>
					<Card.Text>nunber of sentences</Card.Text>

					<Button
						variant="primary"
						onClick={() => {
							// editPlayList(props.playlist.idSongCollection);
							// props.editedPlaylist(false);
						}}
					>
						Edit
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Story;
