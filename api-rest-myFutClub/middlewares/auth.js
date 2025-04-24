// DEPENDENCIES
const jwt = require('../services/jwt');


exports.auth = (req, res, next) => {
    // Checking that authentication header arrives correctly.
    if (!req.headers.authorization) {
        return res.status(401).json({
            status: "error",
            message: "Authorization header is required."
        });
    }

    // Get token from authorization header (without ' or ").
    let token = req.headers.authorization.replace(/['"]+/g, '');

    // Verify token
    let veriftyResult = jwt.verifyAccessToken(token);

    if (veriftyResult.status === "success") {
        // Save "userId" into request.
        req.userId = veriftyResult.userId;
    } else {
        return res.status(400).json({
            status: "error",
            message: "Forbidden: invalid token."
        });
    }

    // Next action.
    next();
}