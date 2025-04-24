// IMPORT DEPENDENCIES
const express = require("express");
const UserController = require("../controllers/user");

// IMPORT MIDDLEWARES
const check = require('../middlewares/auth');

const router = express.Router();

// Define routes
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/profile/:id", check.auth, UserController.profile);

// Export router
module.exports = router;