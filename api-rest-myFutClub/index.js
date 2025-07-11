// IMPORT DEPENDENCIES
//const { connection } = require('./database/connection');
const express = require('express');
const cors = require('cors');

console.log("API NODE de MyFutClub arrancada.");

// BBDD connection
//connection();
// NOTE: Prisma manages the database connection

// Create a node server
const app = express();
const port = 3900;

// Configure cors
app.use(cors());

// Transform body data to JS object
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Load route configuration
const UserRoutes = require("./routes/user");
const TeamRoutes = require("./routes/team");
const ClubRoutes = require("./routes/club");

app.use("/api/user", UserRoutes);
app.use("/api/team", TeamRoutes);
app.use("/api/club", ClubRoutes);

// Put the server to listen http requests
app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: " + port);
});