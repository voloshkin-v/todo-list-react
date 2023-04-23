import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./todoItem.scss";

const TodoItem = ({
	id,
	title,
	completed,
	toggleComplete,
	deleteTodo,
	editTodo,
}) => {
	return (
		<li className="todo-list__item">
			<button
				onClick={() => toggleComplete(id)}
				className={completed ? "is-completed" : ""}
			>
				{title}
			</button>

			<div>
				<button onClick={() => editTodo(id)}>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button onClick={() => deleteTodo(id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
