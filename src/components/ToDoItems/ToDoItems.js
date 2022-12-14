import React from "react";
import "./toDoItems.css";

const ToDoItems = ({ toDoItems, setToDoItems, setEditToDoItem }) => {
  const handleComplete = ({ id }) => {
    setToDoItems(
      toDoItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findToDoItem = toDoItems.find((toDoItem) => toDoItem.id === id);
    setEditToDoItem(findToDoItem);
  };

  const handleDelete = ({ id }) => {
    setToDoItems(toDoItems.filter((toDoItem) => toDoItem.id !== id));
  };

  return (
    <>
      <div>
        {toDoItems.map((toDoItem) => (
          <li className="item" key={toDoItem.id}>
            <input
              type="text"
              value={toDoItem.title}
              className={`list ${toDoItem.completed ? "stk" : ""}`}
              disabled
              // onChange={(event) => event.preventDefault()}
            />
            <button
              className="completedButton"
              onClick={() => handleComplete(toDoItem)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="editButton" onClick={() => handleEdit(toDoItem)}>
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="deleteButton"
              onClick={() => handleDelete(toDoItem)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
