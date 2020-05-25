import React, { useState, useEffect } from "react";

const SearchForm = ({ handleSearch, state }) => (
	<>
		<div className='search'>
			<input
				id='task'
				type='text'
				name='task'
				placeholder='Search by task name'
				onChange={handleSearch}
				value={state.searchTerm}
			/>
		</div>
	</>
);

export default SearchForm;
