const express = require("express");
const app = express();
const port = 3000;

// Datos de los estudiantes (cambia estos valores con tu información real)
const students = {
  1: {
    name: "Jose",
    lastName: "Marmolejo",
    email: "josemarloz@unisabana.edu.co",
    id: "0000285873",
  },
  2: {
    name: "Julian",
    lastName: "Pedraza",
    email: "julianpepa@unisabana.edu",
    id: "0000307536",
  },
};

// Mostrar el index.html directamente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para obtener información de un estudiante según el ID
app.get("/user-info/:id", (req, res) => {
  const studentId = req.params.id;

  // Validar que el ID sea 1 o 2
  if (!["1", "2"].includes(studentId)) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  res.json(students[studentId]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
