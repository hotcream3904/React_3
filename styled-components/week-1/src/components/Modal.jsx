import React from "react";
import { useState } from "react";
import { StButton, StBox } from "./Button";

function Modal() {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<div>
			<h1>Modal</h1>
			{modal && <div onClick={closeModal}>또잉</div>}
			<StBox>
				<StButton type='small' bgColor={"green"} onClick={openModal}>
					open modal
				</StButton>
				<StButton type='primary' bgColor={"pink"}>
					open modal
				</StButton>
			</StBox>
		</div>
	);
}

export default Modal;
