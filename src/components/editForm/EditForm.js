import React, { useState } from 'react';

import './editForm.scss';

const EditForm = ({ title, editTodoTitle, id }) => {
	const [value, setValue] = useState(title);
	const [isValid, setIsValid] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			setIsValid(false);
			return;
		}

		editTodoTitle(value, id);

		setValue('');
		setIsValid(true);
	};

	return (
		<form className="edit-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className={`edit-form__input ${!isValid ? 'nonvalidated' : ''}`}
				placeholder="Update..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<button type="submit" className="button--white edit-form__btn">
				Update
			</button>
		</form>
	);
};

export default EditForm;
