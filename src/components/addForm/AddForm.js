import React, { useState } from 'react';

import './addForm.scss';

const AddForm = ({ addTodo }) => {
	const [value, setValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			setIsValid(false);
			return;
		}

		addTodo(value);

		setValue('');
		setIsValid(true);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className={`add-form__input ${!isValid ? 'nonvalidated' : ''}`}
				placeholder="What is the task today?"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<button type="submit" className="button--white add-form__btn">
				Add
			</button>
		</form>
	);
};

export default AddForm;
