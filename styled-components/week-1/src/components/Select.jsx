import React from "react";
import { styled } from "styled-components";
import { StBox } from "./Button";
function Select() {
	return (
		<StSelectBox>
			<h1>Select</h1>
			<StBox>
				<StSelect name='언어'>
					<option value=''>리액트</option>
					<option value='자바'>자바</option>
					<option value='스프링'>스프링</option>
					<option value='리액트 네이티브'>리액트 네이티브</option>
				</StSelect>
				<button>리액트</button>
			</StBox>
		</StSelectBox>
	);
}

export default Select;

const StSelectBox = styled.div`
	height: 200px;
	margin: 50px 10px 0 10px;
	border: 3px solid rgb(196, 193, 193);
`;

const StSelect = styled.select`
	width: 300px;
	height: 40px;
	border-radius: 8px;
`;
