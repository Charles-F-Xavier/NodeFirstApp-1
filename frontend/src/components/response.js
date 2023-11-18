import React from 'react';
import { Typography } from '@mui/material';

const Respuesta = ({ respuesta }) => {
    return (
        <div id="response" style={{ margin: '10px', padding: '10px', backgroundColor: '#e0e0e0' }}>
            <Typography variant="body1">Respuesta: {respuesta}</Typography>
        </div>
    );
};

export default Respuesta;
