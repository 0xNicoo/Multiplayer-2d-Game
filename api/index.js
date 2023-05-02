const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('build'));

app.get("/game", (_req, res) => {
    const filePath = path.join(__dirname, '../build/index.html');
    if (fs.existsSync(filePath)) {
        console.log(filePath)
        res.sendFile(filePath);
      } else {
        res.status(404).send('Archivo no encontrado');
      }
});

app.get("/", (_req, res) => {
    console.log(__dirname)
    res.send('HOLA :O')
});

app.listen(3000, () => {
    console.log("Servidor en ejecución en http://localhost:3000");
})