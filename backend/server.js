import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const tareas = [
    { id: '1', todo: 'Hacer examen' },
    { id: '2', todo: 'Hacer tarea' },
    { id: '3', todo: 'Estudiar Node.js' },
    { id: '4', todo: 'Aprender React Native' },
    { id: '5', todo: 'Aprender JavaScript' },
    { id: '6', todo: 'Trabajar' },
    { id: '7', todo: 'Hacer ejercicio' },
    { id: '8', todo: 'Ir de vacaciones' },
    { id: '9', todo: 'Comprar despensa' },
    { id: '10', todo: 'Jugar Videojuegos' },
    { id: '11', todo: 'Practicar el piano' },
    { id: '12', todo: 'Planchar mi ropa' },
    { id: '13', todo: 'Bolear mis zapatos' },
    { id: '14', todo: 'Jugar Basquetbol' },
    { id: '15', todo: 'Salir a correr' },
    { id: '16', todo: 'Dormir' }
];

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.get("/tareas", (req, res) => {
    res.json(tareas);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});