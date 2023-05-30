import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  //HOOK
  const [newItem, setNewItem] = useState("");

  //function
  function handleSubmit(e) {
    //evita que se recargue la pagina
    e.preventDefault();
    //evita que se agrege un elemento vacío
    if (newItem === "" || newItem === null) return;

    onSubmit(newItem);
    setNewItem("");
  }

  //return jsx
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
