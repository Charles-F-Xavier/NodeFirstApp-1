// backend/server.js

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { createConnection } = require('mysql');
const config = require('../database/config');

const app = express();
const port = 5000;

app.use(cors());
app.use('/api', apiRoutes);

const db = createConnection(config);

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
    } else {
        console.log('Conectado a MySQL');
    }
});

// Configuración de rutas y demás aquí...

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
