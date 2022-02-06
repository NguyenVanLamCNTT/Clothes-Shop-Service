const {Users} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

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
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email && !password) {
            return res.status(400).json({success: false, message: 'Incorrect login details'});
        }
        const user = await Users.findOne({where: {email: email}});
        if (!user){
            return res.status(400).json({message: 'user not exits'});
        }
        let isCorrectPass = await bcrypt.compare(password, user.password);
        if (!isCorrectPass){
            return res.status(400).json({message: 'Incorrect password'});
        }
        const accessToken = signAccessToken(user.id);
        const refreshToken = jwt.sign(
            {
                id: user.id,
            },
            config.AUTH_TOKEN_SECRET.REFRESH_TOKEN,
            {
                expiresIn: '24h'
            }
        )
        return res.status(200).json({accessToken: accessToken,refreshToken: refreshToken});
    }catch (err) {
        return res.status(400).json(err);
    }
}
const signAccessToken = (user_id) => {
    return jwt.sign(
        {
            id: user_id,
        },
        config.AUTH_TOKEN_SECRET.ACCESS_TOKEN,
        {
            expiresIn: '1h'
        }
    );
}

module.exports = {
    createUser,
}
