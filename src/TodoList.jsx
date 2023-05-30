import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* esto es basicamente un if */}
      {todos.length === 0 && "nothing to show"}
      {todos.map((todo) => {
        return (
          // llama al TodoItem con todos sus valores
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
