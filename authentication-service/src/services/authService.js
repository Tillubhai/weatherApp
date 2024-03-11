// authService.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (userData) => {
    const { username, password } = userData;
    // Additional validation logic can be added here

    const newUser = new User({ username, password });
    await newUser.save();
    return newUser;
};

exports.loginUser = async (loginData) => {
    const { username, password } = loginData;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    return token;
};
