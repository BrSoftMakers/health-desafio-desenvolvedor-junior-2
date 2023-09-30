const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthModel = require('../models/authModel');

const generateToken = (user = {}) => {
    return jwt.sign({
        id: user.id
    },  process.env.TK_SECRET, {
        expiresIn: process.env.EXPIREIN
    });
};

exports.signup =async (req, res) => {
 
    const user = await AuthModel.create(req.body);

    return res.status(201).json({
        token: generateToken(user)
    });
};

exports.signin = async (req, res) => {

    const { email, password } = req.body;

    const user = await AuthModel.findOne({
        where: { email },
    });

    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).json({
            error: true,
            message: "Email or Password doesn't match",
        });
    }

    return res.status(200).json({
        token: generateToken(user)
    });
};