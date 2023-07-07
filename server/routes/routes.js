const express = require("express");
const router = express.Router();
const { registrarUsuario }= require('../consultas/consultas.js');
const {check} = require('../mid/mid.js');


router.get("/", (req, res) => {
    res.send("Hola mundo cruel")
})

router.post('/usuarios', check, async(req, res) => {
    try {
        const usuario = req.body;
        await registrarUsuario(usuario);
        res.send('Usuario registrado');
    } catch (error) {
        res.status(500).send(error)
    }
})
   module.exports = router;  