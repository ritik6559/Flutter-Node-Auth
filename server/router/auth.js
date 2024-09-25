const express = require('express');
const authRouter = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/user')


// sign up router
authRouter.post('/api/signup', async (req, res, next) => {
    try{
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({msg: "User with same email already exists."});
        }

        const hashedPassword = await bcryptjs.hash(password, 8);
        
        let user = new User({
            name,
            email,
            password: hashedPassword,
        });

        user = await user.save();
        res.json(user);
    } catch (e){
        res.status(500).json({ msg: e.mesaage });
    }
});






module.exports = authRouter;