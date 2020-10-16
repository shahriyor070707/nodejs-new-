exports.toDoAuth = (req,res) => {
    const obj = new Object({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.status(201).json({
        success: true,
        data: obj
    })
}
exports.toDoAuthLogin = (req,res) => {
    res.send('Siz avtorizatsiyadan o`tdingiz')
}