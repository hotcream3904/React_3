import "./App.css";
import React, { useState } from "react";
import Header from "components/Header";
import InputContainer from "components/InputContainer";
import ToDoList from "components/ToDoList";

function App() {
	const [todo, setTodo] = useState([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const inputTitleHandler = (event) => {
		setTitle(event.target.value);
	};
	const inputContentHandler = (event) => {
		setContent(event.target.value);
	};
	const todoAddButtonHandler = () => {
		const newTodo = {
			id: Date.now(),
			title,
			content,
			set: false, //기본설정 false working에 있는 아이를 이렇게 생각하고!
		};
		console.log(newTodo);
		setTodo([...todo, newTodo]); //객체를 풀어서 집어넣어야 한다.
		setTitle("");
		setContent("");
	};

	//deleteTodoList 배열이고
	const deleteTodoList = (id) => { //카드하나의 id
		const deleteTodo = todo.filter((item) => item.id !== id); //item.id는 전체 id를 다 돌리는것
		console.log(deleteTodo);
		setTodo(deleteTodo);
	};

	const completeTodoList = (id) => {
		const completeTodo = todo.map((item) => {
			if (item.id === id) {
				return {
					...item, // 스프레드 연산자 : 객체를 푼어서 복사,
					set: true, // set에 true 를 덮어쓴다? 이런 느낌 불변성을 유지하는게 같은 메모리를 유지하는것인가, !? //done으로 꺼져
				};
			}
			return item;
		});
		setTodo(completeTodo);
	};

	const cancelTodoList = (id) => {
		const cancelTodo = todo.map((item) => {
			if (item.id === id) {
				return {
					...item,
					set: false, //false면 working으로 다시 꺼져
				};
			}
			return item;
		});
		setTodo(cancelTodo);
	};

	// const inProgressTodo = todo.filter((item) => !item.set)
	// const successTodo = todo.filter((item) => item.set)

	const { inProgressTodo, successTodo } = todo.reduce(
		(acc, item) => {
			if (item.set) {
				acc.successTodo.push(item);
			} else {
				acc.inProgressTodo.push(item);
			}
			return acc;
		},
		{ inProgressTodo: [], successTodo: [] }
	);

	return (
		<div className='container'>
			<Header />
			<InputContainer
				title={title}
				inputTitleHandler={inputTitleHandler}
				content={content}
				inputContentHandler={inputContentHandler}
				todoAddButtonHandler={todoAddButtonHandler}
			/>

			{/* working */}
			<ToDoList
				text='Working...🔥'
				type={false}
				deleteTodoList={deleteTodoList}
				TwoButton={completeTodoList}
				TwoTodo={inProgressTodo}
			/>

			{/* Done */}
			<ToDoList
				text='Done...🎉'
				type={true}
				deleteTodoList={deleteTodoList}
				TwoButton={cancelTodoList}
				TwoTodo={successTodo}
			/>
		</div>
	);
}

export default App;

