// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ state, toggleCompleted, clearCompleted }) => {
	const results = state.todoList.filter(todo => {
		return todo.task.toLowerCase().includes(state.searchTerm.toLowerCase());
	});
	return (
		<>
			<div className='tasks'>
				{results.map(todo => (
					<Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
				))}
			</div>
			<button className='clear-btn' onClick={clearCompleted}>
				Clear Completed
			</button>
		</>
	);
};

export default TodoList;
