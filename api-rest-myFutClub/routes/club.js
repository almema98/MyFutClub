// IMPORT DEPENDENCIES
const express = require("express");
const multer = require("multer");
const ClubControler = require("../controllers/club");

// IMPORT MIDDLEWARES
const check = require('../middlewares/auth');


// Upload configuration (multer)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/club_shields/");
    },
    filename: (req, file, cb) => {
        cb(null, "club_shield-" + file.originalname);
    }
});

const uploads = multer({storage});  // storage: storage


const router = express.Router();

// Define routes
router.get("/getClubShield/:fileName", ClubControler.getClubShield);

// Export router
module.exports = router;