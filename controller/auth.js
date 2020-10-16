const User = require('../models/User')
//creat
exports.toDoAuth = async (req,res) => {
    const user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
        .then(() => {
            res.status(201).json({
                success: true,
                data: user
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false,
                error: error
            })
        })

}

//read
exports.getUser = async(req,res) =>{
    const user = await User.find(); // user modelda nima saqlansa hammasino olin beradi find() metodi yani hammasini o`qiydi
    res.status(200).json({
        success: true,
        data: user
    })
}

//get user by id
exports.getById = async(req,res) =>{
    const user = await User.findOne({_id: req.params.id})
    if(!user){
        res.status(404).json({
            success: false,
            data: 'User not found'
        })
    }
    res.status(200).json({
        success: true,
        data: user
    })
}

//Update User
exports.editUser = async(req,res) =>{
    const user = await User.findByIdAndUpdate({_id: req.params.id});
    if(!user){
        res.status(404).json({
            success: false,
            data: 'User not found'
        })
    }
    res.status(200).json({
        success: true,
        data: user
    });

    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save()
        .then(() => {
            res.status(200).json({
                success: true,
                data: user
            })
        })
        .catch((error) => {
            res.send(error)
        })


}

//Delete User
exports.deleteUser = async(req,res) =>{
    await User.findByIdAndDelete({_id: req.params.id})
    res.status(200).json({
        success: true,
        data: []
    })
}

exports.toDoAuthLogin = (req,res) => {
    res.send('Siz avtorizatsiyadan o`tdingiz')
}