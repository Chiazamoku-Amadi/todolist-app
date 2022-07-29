import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = ({
  textInput,
  setTextInput,
  toDoItem,
  setToDoItem,
  editToDoItem,
  setEditToDoItem,
}) => {
  const updateToDoItem = (id, title, completed) => {
    const newToDoItem = toDoItem.map((toDoItem) =>
      toDoItem.id === id ? (id, title, completed) : toDoItem
    );
    setToDoItem(newToDoItem);
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
      setToDoItem([
        ...toDoItem,
        { id: uuidv4(), title: textInput, completed: false },
      ]);
    } else {
      updateToDoItem(editToDoItem.id, textInput, editToDoItem.completed);
    }

    setTextInput("");
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
