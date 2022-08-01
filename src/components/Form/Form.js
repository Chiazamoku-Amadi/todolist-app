import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = ({
  textInput,
  setTextInput,
  toDoItems,
  setToDoItems,
  editToDoItem,
  setEditToDoItem,
}) => {
  const updateToDoItem = (id, title, completed) => {
    const newToDoItem = toDoItems.map((toDoItem) =>
      toDoItem.id === id ? { id, title, completed } : toDoItem
    );
    setToDoItems(newToDoItem);
    setEditToDoItem("");
  };

  useEffect(() => {
    if (editToDoItem) {
      setTextInput(editToDoItem.title);
    } else {
      setTextInput("");
    }
  }, [setTextInput, editToDoItem]);

  const onTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!editToDoItem) {
      setToDoItems([
        ...toDoItems,
        { id: uuidv4(), title: textInput, completed: false },
      ]);
      setTextInput("");
    } else {
      updateToDoItem(editToDoItem.id, textInput, editToDoItem.completed);
    }
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a todo item"
          className="todoInput"
          value={textInput}
          required
          onChange={onTextInputChange}
        />
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
