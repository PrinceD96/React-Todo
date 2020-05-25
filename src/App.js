import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";
import "./components/TodoComponents/Todo.scss";

const todo = [
	{
		task: "Fork the project",
		id: "1528817077098",
		completed: false
	},
	{
		task: "Install modules",
		id: "9876547077098",
		completed: false
	},
	{
		task: "Start the server",
		id: "0987654321098",
		completed: false
	},
	{
		task: "Meet MVP",
		id: "0987654324789",
		completed: false
	}
];

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			todoList: todo,
			searchTerm: ""
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

	clearCompleted = () => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.filter(todo => {
				return !todo.completed;
			})
		};
		this.setState(newState);
	};
	handleSearch = e => {
		this.setState({ ...this.state, searchTerm: e.target.value });
	};
	render() {
		return (
			<div className='App'>
				<div className='header'>
					<h2>Todo App!</h2>
					<TodoForm
						addTodo={this.addTodo}
						clearCompleted={this.clearCompleted}
					/>
				</div>
				<SearchForm handleSearch={this.handleSearch} state={this.state} />
				<TodoList
					state={this.state}
					toggleCompleted={this.toggleCompleted}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
