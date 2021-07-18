import React, { useState } from "react";
import "./FlipCard.css";
import ReactCardFlip from "react-card-flip";
import ButtonModal from "./ButtonModal";
import { Button } from "react-bootstrap";

const FlipCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="front" onMouseOver={() => setIsFlipped(true)}>
                    <img className="card-image" src={props.value.img} />
                </div>

                <div className="back" onMouseOut={() => setIsFlipped(false)}>
                    <h4 className="card-title">{props.value.title}</h4>
                    <p id='des'>{props.value.des}</p>
                    <div className="com-btn">
                        <Button
                            id="com-btn"
                            variant="primary"
                            onClick={() => setModalShow(true)}
                            onMouseOver={() => setIsFlipped(true)}
                        >
                            Comments
                        </Button>
                    </div>
                    <ButtonModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        comments={props.value.comments}
                    />
                </div>
            </ReactCardFlip>
        </>
    );
};

export default FlipCard;
