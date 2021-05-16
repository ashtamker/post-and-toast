import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

const signin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const searchUser = await User.findOne({email});
        if(!searchUser) return res.status(404).json({massage: "User doesn't exist"});

        const checkPassword = await bcrypt.compare(password, searchUser.password);
        if(!checkPassword) return res.status(400).json({massage: "wrong input"})

        const token = jwt.sign({email: searchUser.email, id:searchUser._id}, 'test', {expiresIn: "1h"});
        res.status(200).json({result: searchUser, token});
    } catch (error) {
       res.status(500).json({massage: "Login failed"}); 
    }
}

const signup = async (req, res) => {
    
}

module.exports = {
    signin,
    signup,
}