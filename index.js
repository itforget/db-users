const express = require('express')
const port = 3000
const app = express();



app.get("/", (req, res) => {
    res.status(200).send("Server Usuarios!");
})

app.get("/usuarios", (req, res) => {
    res.status(200).json()
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta: ${port}`)
})