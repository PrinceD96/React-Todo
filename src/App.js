import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todo = [
	{
		task: "Fork and clone the project",
		id: "1528817077098",
		completed: false
	},
	{
		task: "Install node modules",
		id: "9876547077098",
		completed: false
	},
	{
		task: "Start the development server",
		id: "0987654321098",
		completed: false
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

	addTodo = newTodo => {
		const newState = {
			...this.state,
			todoList: [
				...this.state.todoList,
				{ task: newTodo, completed: false, id: Date.now() }
			]
		};
		this.setState(newState);
	};

	toggleCompleted = id => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					};
				}
				return todo;
			})
		};
		this.setState(newState);
	};

	clearAll = () => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.filter(todo => {
				return todo.completed;
			})
		};
		this.setState(newState);
	};

	render() {
		return (
			<div className='App'>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm addTodo={this.addTodo} />
				<TodoList
					todo={this.state.todoList}
					toggleCompleted={this.toggleCompleted}
					clearAll={this.clearAll}
				/>
			</div>
		);
	}
}

export default App;
