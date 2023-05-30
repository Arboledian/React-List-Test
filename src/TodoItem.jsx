export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  //dentro del parentesis van todos los valores que se deben pasar(es una funcion)
  return (
    <li>
      <label>
        {/* //el checkmark po flaquito */}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      {/* delete button */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
