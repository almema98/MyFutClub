// IMPORT DEPENDENCIES
const prisma = require('../lib/prisma');
const fs = require("fs");
const path = require("path");


// Endpoint to get the club shield.
const getClubShield = (req, res) => {
    // Receive url param.
    const fileName = req.params.fileName;

    // Compose the absolut path image.
    const filePath = "./uploads/club_shields/" + fileName;

    // Check that file exists.
    fs.stat(filePath, (error, exist) => {
        if (!exist) {
            return res.status(404).send({
                status: "error",
                mesagge: "Image not exist."
            });
        }

        // Return file (with express)
        // I am use resolve because "sendFile" requires an absolut path.
        return res.sendFile(path.resolve(filePath));
    });
}

module.exports = {
    getClubShield
}