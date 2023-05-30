import { useEffect, useState } from "react";
import "./style.css";
import { TodoList } from "./TodoList";
import { NewTodoForm } from "./newTodoForm";

//React order inside function
//Hooks en la parte de arriba, luego funciones
//Y por último return

export default function App() {
  //Sobre los Hooks, deben estar arriba del todo y no deben estar dentro
  //de condiciones, ej: no puedes ponerlo dentro de un If o se rompe el code

  //#region Hook
  //esta funcion recupera los datos del JSON y los convierte a sus valores normales
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  //esta funcion guarda el valor de los items de la lista en forma de JSON
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  //#endregion

  //#region Funciones
  //Todo es un nombre general

  //La función addTodo es para agregar items a la lista
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  //la funcion toggle es para cambiar el estado del checkmark

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  }

  //la función delete es para borrar el item de la lista
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  //#endregion

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header"> List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
