import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { StBox } from "./Button";
function Select() {
	const [selectBoxOne, setSelectBoxOne] = useState(false);
	const [selectBoxTwo, setSelectBoxTwo] = useState(false);
	const toggleSelectBoxOne = () => {
		setSelectBoxOne(!selectBoxOne);
	};
	const toggleSelectBoxTwo = () => {
		setSelectBoxTwo(!selectBoxTwo);
	};

	const languageList = ["리액트", "자바", "스프링", "리액트네이티브"];
	const [fisrtLanguage, setfirstLanguage] = useState("리액트");
	const firstLanguageClick = () => {
		setfirstLanguage();
	};
	const [secondLanguage, setSecondLanguage] = useState("리액트");
	const secondLanguageClick = () => {
		setSecondLanguage();
	};

	return (
		<StSelectBox>
			<h1>Select</h1>
			{selectBoxOne && (
				<>
					{languageList.map((item, index) => {
						return (
							<StChoiceBox key={index} onClick={() => firstLanguageClick(index)}>
								{item}
							</StChoiceBox>
						);
					})}
				</>
			)}
			{selectBoxTwo && (
				<>
					{languageList.map((item, index) => {
						return (
							<StChoiceBox key={index} onClick={() => secondLanguageClick(index)}>
								{item}
							</StChoiceBox>
						);
					})}
				</>
			)}

			<StBox>
				<StSelect onClick={toggleSelectBoxOne}>
					<p>{fisrtLanguage}</p>
					<p>▼</p>
				</StSelect>
				<StSelect onClick={toggleSelectBoxTwo}>
					<p>{secondLanguage}</p>
					<p>▼</p>
				</StSelect>
			</StBox>
		</StSelectBox>
	);
}

export default Select;

const StSelectBox = styled.div`
	height: 200px;
	margin: 50px 10px 0 10px;
	border: 2px solid rgb(196, 193, 193);
`;

const StSelect = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	width: 300px;
	height: 40px;
	border-radius: 8px;
	border: 1px solid rgb(196, 193, 193);
`;

const StChoiceBox = styled.button`
	border: 1px solid rgb(196, 193, 193);
	border-radius: 8px;
`;
