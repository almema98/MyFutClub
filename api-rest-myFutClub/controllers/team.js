// IMPORT DEPENDENCIES AND SERVICES
const prisma = require('../lib/prisma');

// Endpoint to get the a list of teams that are coached by a coach.
const coachsTeams = async (req, res) => {
    // Get the user id from the url.
    const userId = req.params.id;

    try {
        // Query to get a coach's teams.
        const teamsResult = await prisma.team.findMany({
            where: {
                coach: parseInt(userId)
            },
            include: {
                teamToClub: {
                    select: {
                        name: true,
                        club_shield: true
                    }
                },
                teamToDivision: {
                    select: {
                        age_group: true,
                        group: true
                    }
                }
            } 
        });

        // Check that are teams.
        if (!teamsResult || (teamsResult.length < 1)) {
            return res.status(404).json({
                status: "error",
                message: "Teams not found."
            });
        }

        // Rename fields.
        const teams = teamsResult.map(team => ({
            ...team,
            club: team.teamToClub,
            division: team.teamToDivision,
            teamToClub: undefined,
            teamToDivision: undefined
        }));

        // Return response
        return res.status(200).json({
            status: "success",
            message: "Teams found.",
            teams
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "error",
            message: "Internal server errror (coachsTeams)."
        });
    }
}

// Endpoint to get all player's team (squad list).
const squadList = async (req, res) => {
    // Receive the id team from url params.
    const idTeam = req.params.id;

    // Check that parameter arrive correctly.
    if (!idTeam) {
        return res.status(419).json({
            status: "error",
            message: "The request resource is missing required arguments."
        });
    }

    try {
        // Query to get the squad list.
        const players = await prisma.user.findMany({
            where: {
                team: parseInt(idTeam)
            },
            omit: {
                password: true
            }
        });

        // Check if exist players in the team.
        if ( !players || (players.length < 1) ) {
            return res.status(404).json({
                status: "error",
                message: "Players not found."
            });
        }

        // Return response
        return res.status(200).json({
            status: "success",
            message: "Squad list found.",
            players
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "error",
            message: "Internal server errror (squadList)."
        });
    }
}


module.exports = {
    coachsTeams,
    squadList
}