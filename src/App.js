import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const todo = [
	{
		task: "Fork and clone the project",
		id: "1528817077098",
		completed: "false"
	},
	{
		task: "Install node modules",
		id: "9876547077098",
		completed: "false"
	},
	{
		task: "Start the development server",
		id: "0987654321098",
		completed: "false"
	}
];

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			todoList: todo
		};
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList todo={this.state.todoList} />
			</div>
		);
	}
}

export default App;
