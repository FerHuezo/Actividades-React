import "./style.css"
import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const Suma = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResult(suma)
  }
  const Resta = () => {
    const resta = parseFloat(num1) - parseFloat(num2);
    setResult(resta)
  }

  const Multiplicacion = () => {
    const multi = parseFloat(num1) * parseFloat(num2);
    setResult(multi)
  }

  const Division = () => {
    const divi = parseFloat(num1) / parseFloat(num2);
    setResult(divi)
  }


    return (
      <>
<div className="card form">
  <div className="text-center mb-3">
    <h3>Calculadora</h3>

  <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Numero 1" variant="outlined" value={num1} 
      onChange={(e) => setNum1(e.target.value)}/>
      <br></br>
      <TextField id="outlined-basic" label="Numero 2" variant="outlined" value={num2} 
      onChange={(e) => setNum2(e.target.value)}/>
    </Box> 

    </div>
  <br />
  Elige la funcion
  <button onClick={Suma}>Suma</button>
  <button onClick={Resta}>Resta</button>
  <button onClick={Multiplicacion}>Multiplicación</button>
  <button onClick={Division}>División</button>
  <hr />

  <marquee>{result}</marquee>
  </div>
  
  </>
    );
  };
  export default Form;