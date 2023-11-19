import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import Respuesta from './response';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [resultado, setResultado] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        const respuesta = `Hola, ${nombre}. Tienes ${edad} años.`;
        setResultado(respuesta);

    };

    return (
        <Container maxWidth="lg">
            <form onSubmit={manejarEnvio}>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <TextField
                    label="Edad"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
            <Respuesta respuesta={resultado} />
        </Container>
    );
};

export default Formulario;
