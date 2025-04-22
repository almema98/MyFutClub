// IMPORT DEPENDENCIES
const prisma = require('../lib/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Endpoint for loggin an user into the app. Returns the token containing the user's encrypted data.
const login = async(req, res) => {
    // Receive parameters form body.
    let params = req.body;

    // Check that parameters arrives correctly.
    if (!params.email || !params.password) {
        return res.status(419).json({
            status: "error",
            message: "The request resource is missing required arguments."
        });
    }

    // Validate parameters.
    // ????????????????????????????????????????????????????????
    // ????????????????????????????????????????????????????????
    // ????????????????????????????????????????????????????????

    // Find and compare the received parameters with the data stored in database.
    const logedUser = await prisma.user.findUnique({
        where: {
            email: params.email
        }
    });

    // Check that this user exists.
    if (!logedUser) {
        return res.status(400).json({
            status: "error",
            message: "Email or password are incorrect."
        });
    }
    
    // Verify password.
    const verify = await bcrypt.compare(params.password, logedUser.password);

    if (!verify) {
        return res.status(400).json({
            status: "error",
            message: "Email or password are incorrect."
        });
    }

    // Create access token.
    const token = jwt.sign(logedUser, "clave_secreta_myfutclub");

    // Return response.
    return res.status(200).json({
        status: "success",
        message: "User logged into the app.",
        user: {
            id_user: logedUser.id_user,
            name: logedUser.name,
            email: logedUser.email,
            role: logedUser.role
        },
        token
    });
}


// Endpoint for register an user into the app.
const register = (req, res) => {
    // Received parameters from body.
    let params = req.body;

    // Check that parameters arrives correctly.
    

    // Return response
    return res.status(200).json({
        status: "success",
        message: "Register endpoint."
    });
}

module.exports = {
    login,
    register
}