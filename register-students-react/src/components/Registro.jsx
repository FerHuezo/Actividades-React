import "./Registro.css";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Registro = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("")
    const [carnet, setCarnet] = useState("")
    const [draggedEstudiante, setDraggedEstudiante] = useState(null);

    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") return;
        setEstudiantes([...estudiantes, { id: Date.now(), nombreEstudiante : nombre, edadEstudiante: edad, carnetEstudiante : carnet }]);
        setNombre("")
        setCarnet("")
        setEdad("")
    };

    const estudianteEliminado = (id) => {
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id));
    };

    const handleDragStart = (id) => {
        setDraggedEstudiante(id);
    };

    const handleDrop = () => {
        if (draggedEstudiante) {
            estudianteEliminado(draggedEstudiante);
            setDraggedEstudiante(null);
        }
    };

    const handleDragEnd = () => {
        setDraggedEstudiante(null);
    };

    return (
        <div className="todo-container">
            <h2>Registro Estudiantil</h2>
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
    <TextField id="outlined-basic" label="Nombre de estudiante" variant="outlined" value={nombre} 
      onChange={(e) => setNombre(e.target.value)}/>
        <br></br>
        
    <TextField id="outlined-basic" type="Number" label="Edad de estudiante" variant="outlined" value={edad} 
      onChange={(e) => setEdad(e.target.value)}/>
        <br></br>
    <TextField id="outlined-basic" label="Carnet del estudiante" variant="outlined" value={carnet} 
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
                <span>👤 Nombre: {estudiante.nombreEstudiante}</span> <br />
                <span>🎂 Edad: {estudiante.edadEstudiante}</span> <br />
                <span>🆔 Carnet: {estudiante.carnetEstudiante}</span>                    
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

export default Registro;

