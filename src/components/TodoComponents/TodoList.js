// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	return (
		<div>
			{props.todo.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleCompleted={props.toggleCompleted}
				/>
			))}
			<button onClick={props.clearAll}>Clear all</button>
		</div>
	);
};

export default TodoList;
