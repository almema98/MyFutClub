// IMPORT DEPENDENCIES
const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

// Define routes
router.post("/login", UserController.login);
router.post("/register", UserController.register);

// Export router
module.exports = router;