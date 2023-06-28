import React from 'react';

function InputContainer({ title, inputTitleHandler, content, inputContentHandler, todoAddButtonHandler }) {
	return (
		<div className='input-container'>
			<div className='input-content'>
				제목 <input type='text' value={title} onChange={inputTitleHandler}></input>
				내용 <input type='text' value={content} onChange={inputContentHandler}></input>
			</div>
			<button onClick={todoAddButtonHandler}>추가하기</button>
		</div>
	);
}

export default InputContainer;
