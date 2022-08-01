import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ToDoItems from "./components/ToDoItems/ToDoItems";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [editToDoItem, setEditToDoItem] = useState(null);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Form
          textInput={textInput}
          setTextInput={setTextInput}
          toDoItems={toDoItems}
          setToDoItems={setToDoItems}
          editToDoItem={editToDoItem}
          setEditToDoItem={setEditToDoItem}
        />
      </div>
      <div>
        <ToDoItems
          toDoItems={toDoItems}
          setToDoItems={setToDoItems}
          setEditToDoItem={setEditToDoItem}
        />
      </div>
    </div>
  );
};

export default App;
