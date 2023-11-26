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

app.get('/status', (req, res) => {
    db.connect((err) => {
        if (err) {
            console.error('Error de conexión a MySQL:', err);
            res.status(500).json({ status: 'Error de conexión a MySQL' });
        } else {
            console.log('Conectado a MySQL');
            res.json({ status: 'Conectado a MySQL' });
            db.end(); // Cierra la conexión después de enviar la respuesta
        }
    });
});

// Resto de tu código...

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
