import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container component="footer" maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="body2" color="textSecondary" align="center">
                © 2023 Mi Página React. Todos los derechos reservados.
            </Typography>
        </Container>
    );
};

export default Footer;
