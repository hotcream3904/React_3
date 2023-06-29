import React from 'react'

function ToDoList({text, type, deleteTodoList, TwoButton, TwoTodo}) {
    return (
		<div>
			<p>{text}</p>
			<div className='to-do-list'>
				{TwoTodo.map((item) => {
					return (
						<div key={item.id} className='todo-card'>
							<h3>{item.title}</h3>
							<div>{item.content}</div>
							<div className='button-todo'>
								<button onClick={() => deleteTodoList(item.id)}>삭제하기</button>
								<button onClick={() => TwoButton(item.id)}>{type ? "취소" : "완료"}</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ToDoList

