const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).send('Tarea agregada exitosamente');
});

app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { task } = req.body;
  tasks[id] = task;
  res.send('Tarea actualizada exitosamente');
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.send('Tarea eliminada exitosamente');
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
