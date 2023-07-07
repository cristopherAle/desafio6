const pool = require('../db/conexion')
const bcrypt = require('bcryptjs');

const registrarUsuario = async (usuario) => {
    let {email, passsword, rol, lenguage} = usuario;
    const passwordEncriptada = bcrypt.hashSync(passsword);
    //password = passwordEncriptada;
    const values = [email, passwordEncriptada, rol, lenguage];
    const consultas = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";	
    await pool.query(consultas, values);

}

module.exports = {
    registrarUsuario
}