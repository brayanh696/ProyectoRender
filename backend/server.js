import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

const todos = [
    { id: 1, texto: 'Comprar leche' },
    { id: 2, texto: 'Hacer tarea' },
    { id: 3, texto: 'Subir proyecto a Render' }
];

// Endpoint API
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});