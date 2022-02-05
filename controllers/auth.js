const {Users} = require('../models');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const {email,first_name,last_name,phone,address,gender,password} = req.body;
        const user_email = await Users.findOne({where: {email: email}});
        if (user_email){
            return res.status(400).json({success: false, message: "email exists!"});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const user = await Users.create({
            email: email,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            address: address,
            gender: gender,
            password: hashPassword,
            role: 'customer'
        });
        if(!user) throw Error('Error!');
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json({success: false, message: err.toString()});
    }
}
module.exports = {
    createUser,
}
