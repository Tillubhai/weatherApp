// authController.js
const authService = require('../services/authService');

exports.registerUser = async (req, res) => {
    try {
        const newUser = await authService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
