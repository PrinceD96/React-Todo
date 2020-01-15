import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: ""
		};
	}

	handleChanges = e => {
		this.state({ ...this.state, newTodo: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.newTodo);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChanges}
					type='text'
					name='todo'
					value={this.state.newTodo}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
