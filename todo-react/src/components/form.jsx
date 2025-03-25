import React, { useState } from "react";
import "./form.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [draggedTodo, setDraggedTodo] = useState(null);

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const handleDragStart = (id) => {
        setDraggedTodo(id);
    };

    const handleDrop = () => {
        if (draggedTodo) {
            setTodos(todos.filter((todo) => todo.id !== draggedTodo));
            setDraggedTodo(null);
        }
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                        draggable
                        onDragStart={() => handleDragStart(todo.id)}
                    >
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                    </li>
                ))}
            </ul>

            <div
                className="delete-box"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                🗑️ Arrastra aquí para eliminar la tarea
            </div>
        </div>
    );
};

export default Todo;