import "./Registro.css";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Todo = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("")
    const [carnet, setCarnet] = useState("")
    const [draggedEstudiante, setDraggedEstudiante] = useState(null);

    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") return;
        setEstudiantes([...estudiante, { id: Date.now(), nombre : nombreEstudiante, edad: edadEstudiante, carnet : carnetEstudiante }]);
        setEstudiantes("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleDragStart = (id) => {
        setDraggedTodo(id);
    };

    const handleDrop = () => {
        if (draggedTodo) {
            deleteTodo(draggedTodo);
            setDraggedTodo(null);
        }
    };

    const handleDragEnd = () => {
        setDraggedTodo(null);
    };

    return (
        <div className="todo-container">
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
    <TextField id="outlined-basic" label="Nombre" variant="outlined" value={nombre} 
      onChange={(e) => setNombre(e.target.value)}/>
        <br></br>
        
    <TextField id="outlined-basic" type="Number" label="Edad" variant="outlined" value={edad} 
      onChange={(e) => setEdad(e.target.value)}/>
        <br></br>
    <TextField id="outlined-basic" label="Carnet" variant="outlined" value={carnet} 
      onChange={(e) => setCarnet(e.target.value)}/>
</Box> 

                <button onClick={agregarEstudiante}>Agregar Estudiante</button>
            <ul className="todo-list">
                {estudiantes.map((estudiante) => (
                    <li
                        key={estudiante.id}
                        className={`todo-item ${ draggedEstudiante === estudiante.id ? "dragging-delete" : ""}`}
                        draggable
                        onDragStart={() => handleDragStart(estudiante.id)}
                        onDragEnd={handleDragEnd}
                    >
                        <span>{estudiante.text}</span>
                    </li>
                ))}
            </ul>
            
            <div
                className="delete-box"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                🗑️ Arrastra aqui para eliminar al estudiante
            </div>
        </div>
    );
};

export default Todo;

