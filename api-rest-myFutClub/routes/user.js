// IMPORT DEPENDENCIES
const express = require("express");
const multer = require("multer");
const UserController = require("../controllers/user");

// IMPORT MIDDLEWARES
const check = require('../middlewares/auth');

// Upload configuration (multer)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/avatars/");
    },
    filename: (req, file, cb) => {
        cb(null, "avatar-" + file.originalname);
    }
});

const uploads = multer({storage});  // storage: storage

const router = express.Router();

// Define routes
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/profile/:id", check.auth, UserController.profile);
router.get("/avatar/:fileName", UserController.avatar);

// Export router
module.exports = router;