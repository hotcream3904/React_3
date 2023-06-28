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
			set: false,
		};
		console.log(newTodo);
		setTodo([...todo, newTodo]); //객체를 풀어서 집어넣어야 한다.
		setTitle("");
		setContent("");
	};

	const deleteTodoList = (id) => {
		const deleteTodo = todo.filter((item) => item.id !== id);
		setTodo(deleteTodo);
	};
	const completeTodoList = (id) => {
		const completeTodo = todo.map((item) => {
			if (item.id === id) {
				return {
					...item,
					set: true,
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
					set: false,
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
				title='Working...🔥'
				type={false}
				deleteTodoList={deleteTodoList}
				TwoButton={completeTodoList}
				TwoTodo={inProgressTodo}
			/>

			{/* Done */}
			<ToDoList
				title='Done...🎉'
				type={true}
				deleteTodoList={deleteTodoList}
				TwoButton={cancelTodoList}
				TwoTodo={successTodo}
			/>
		</div>
	);
}

export default App;
