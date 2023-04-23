import TodoItem from "../todoItem/TodoItem";
import EditForm from "../editForm/EditForm";

import "./todoList.scss";

const TodoList = ({
	todos,
	deleteTodo,
	toggleComplete,
	editTodo,
	editTodoTitle,
}) => {
	if (todos.length === 0) {
		return (
			<div className="todo-body">
				<p>The list is empty.</p>
			</div>
		);
	}

	const todoList = todos.map(({ id, title, completed, isEditing }) => {
		return isEditing ? (
			<li className="todo-list__item todo-list__item--editing" key={id}>
				<EditForm title={title} editTodoTitle={editTodoTitle} id={id} />
			</li>
		) : (
			<TodoItem
				key={id}
				id={id}
				title={title}
				completed={completed}
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
				editTodo={editTodo}
			/>
		);
	});

	return (
		<ul className="todo-list">
			{todos.length ? (
				todoList
			) : (
				<li className="empty">The list is empty</li>
			)}
		</ul>
	);
};

export default TodoList;
