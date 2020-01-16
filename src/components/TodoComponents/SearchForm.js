import React, { useState, useEffect } from "react";

const SearchForm = ({ todo }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState(todo);

	useEffect(() => {}, [searchTerm]);

	const handleChange = e => {
		setSearchTerm(e.target.value);

		const results = todo.filter(todo => {
			return todo.task.toLowerCase().includes(searchTerm.toLowerCase());
		});

		setSearchResults(results);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					id='task'
					type='text'
					name='task'
					placeholder='Search by task name'
					onChange={handleChange}
					value={searchTerm}
				/>
			</form>
		</>
	);
};

export default SearchForm;
