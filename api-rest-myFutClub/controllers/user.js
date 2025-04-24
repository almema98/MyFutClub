// IMPORT DEPENDENCIES AND SERVICES
const prisma = require('../lib/prisma');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt');

// Endpoint for loggin an user into the app. Returns the token containing the user's encrypted data.
const login = async (req, res) => {
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
    try {
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
        const token = jwt.createAccessToken(logedUser.id_user);

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

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Internal server errror (login)."
        });
    }
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


// Endpoint for get a user's profile.
const profile = async (req, res) => {
    // Get url param.
    const userId = req.params.id;

    try {
        // Query to get user profile data.
        const userProfile = await prisma.user.findUnique({
            where: { 
                id_user: parseInt(userId)
            },
            omit: {
                password: true
            }
        });

        // Check that this user exists.
        if (!userProfile) {
            return res.status(404).json({
                status: "error",
                message: "User not found."
            })
        }

        // Return response
        return res.status(200).json({
            status: "success",
            message: "User found.",
            user: userProfile
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "Internal server errror (profile)."
        });
    }
}

module.exports = {
    login,
    register,
    profile
}