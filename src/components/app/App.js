import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddForm from '../addForm/AddForm';
import TodoList from '../todoList/TodoList';

import './app.scss';

const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const data = localStorage.getItem('TODOS_LIST');

		if (data) {
			setTodos(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('TODOS_LIST', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todoTitle) => {
		const newTodo = {
			id: uuidv4(),
			title: todoTitle,
			completed: false,
			isEditing: false,
		};

		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const editTodoTitle = (todoTitle, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, title: todoTitle, isEditing: false }
					: todo
			)
		);
	};

	return (
		<div className="todo">
			<div className="todo__wrapper">
				<h1 className="todo__title">Todo List: </h1>

				<AddForm addTodo={addTodo} />

				<TodoList
					todos={todos}
					deleteTodo={deleteTodo}
					toggleComplete={toggleComplete}
					editTodo={editTodo}
					editTodoTitle={editTodoTitle}
				/>
			</div>
		</div>
	);
};

export default App;
