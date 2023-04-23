import React, { useState } from "react";

import "./addForm.scss";

const AddForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			return;
		}

		addTodo(value);
		setValue("");
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="add-form__input"
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
