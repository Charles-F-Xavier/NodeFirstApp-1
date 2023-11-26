import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Formulario from './components/form';

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="lg" style={{ flex: 4, marginTop: '10px' }}>
                <Typography variant="h1">Hola, Mundo!</Typography>
                <Typography variant="body1">Este es un ejemplo de aplicación React con Material-UI.</Typography>
                <Formulario />
            </Container>
            <Footer />
        </Box>

    );
}

export default App;
