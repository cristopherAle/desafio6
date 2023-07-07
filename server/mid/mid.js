const check = (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password) {
     res
        .status(401)
        .send({message: "No se recibieron las credenciales en esta consulta"})
    }
    next();
}

module.export={
    check
}