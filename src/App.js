import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ToDoItems from "./components/ToDoItems/ToDoItems";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [toDoItem, setToDoItem] = useState([]);
  const [editToDoItem, setEditToDoItem] = useState([]);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Form
          textInput={textInput}
          setTextInput={setTextInput}
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
        />
      </div>
      <div>
        <ToDoItems
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          editToDoItem={editToDoItem}
          setEditToDoItem={setEditToDoItem}
        />
      </div>
    </div>
  );
};

export default App;
