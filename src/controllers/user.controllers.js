const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel.js');

const signin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const searchUser = await User.findOne({email});
        if(!searchUser) return res.status(404).json({massage: "User doesn't exist"});

        const checkPassword = await bcrypt.compare(password, searchUser.password);
        if(!checkPassword) return res.status(400).json({massage: "wrong input"})

        const token = jwt.sign({email: searchUser.email, id:searchUser._id}, 'post-code', {expiresIn: "1h"});
        res.status(200).json({result: searchUser, token});
    } catch (error) {
       res.status(500).json({massage: "Login failed"}); 
    }
}

const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        const searchUser = await User.findOne({email});
        if(searchUser) return res.status(400).json({massage: "User exist wuth this email"});
        
        if(password !== confirmPassword) return res.status(400).json({massage: "Password don't match"});
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});
        const token = jwt.sign({email: result.email, id:result._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result, token});

    } catch (error) {
        res.status(500).json({massage: "Signup failed"}); 

    }

}

module.exports = {
    signin,
    signup,
}