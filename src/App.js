import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";
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
		task: "Start the dev server",
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

	clearCompleted = () => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.filter(todo => {
				return !todo.completed;
			})
		};
		this.setState(newState);
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
				<SearchForm todo={this.state.todoList} />
				<TodoList
					todo={this.state.todoList}
					toggleCompleted={this.toggleCompleted}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
