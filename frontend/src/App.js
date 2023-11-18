import React from 'react';
import { Container, Typography } from '@mui/material';
import Formulario from './components/form';

function App() {
    return (
        <Container>
            <Typography variant="h1">Hola, Mundo!</Typography>
            <Typography variant="body1">Este es un ejemplo de aplicación React con Material-UI.</Typography>
            <Formulario />
        </Container>
    );
}

export default App;
