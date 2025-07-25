import { Global } from "./Global";

// Method that returns a squad list.
// Receive an id team.
export const squadTeam = async (idTeam) => {
    // API request
    const squadResult = await fetch(Global.url + "team/squadList/" + idTeam, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    });

    const squadData = await squadResult.json();

    return squadData;
}