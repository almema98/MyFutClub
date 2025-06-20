// IMPORT DEPENDENCIES
const express = require("express");
const TeamControler = require("../controllers/team");

// IMPORT MIDDLEWARES
const check = require('../middlewares/auth');

const router = express.Router();

// Define routes
router.get("/coachsteams/:id", check.auth, TeamControler.coachsTeams);
router.get("/squadList/:id", check.auth, TeamControler.squadList);

// Export router
module.exports = router;