import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: ""
		};
	}

	handleChanges = e => {
		this.setState({ ...this.state, newTodo: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({ ...this.state, newTodo: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChanges}
					type='text'
					name='todo'
					value={this.state.newTodo}
					placeholder='...todo'
				/>
				<button className='addTodo-btn' type='submit'>
					Add Todo
				</button>
			</form>
		);
	}
}

export default TodoForm;
