import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../../../../../hooks/useAuth';
import { Global } from '../../../../../../helpers/Global';

export const MyTeams = () => {

    const { auth } = useAuth();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getMyTeams();
    }, []);


    // Function to get the teams that are coached by a coach (user logged currently).
    const getMyTeams = async () => {
        // Get token from local storage.
        const token = localStorage.getItem('token');

        // API request
        const requestResult = await fetch(Global.url + "team/coachsTeams/" + auth.id_user, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await requestResult.json();

        // Update the state if the response is successfuly.
        if (data.status === "success") {
            setTeams([...data.teams]);
        }
    }

    return (
        <>
            <h1 className='title'>MIS EQUIPOS</h1>

            <div className='content__container menu__container'>
                {teams.map(team => {
                    return (
                        <Link to={"/myfutclub/mis-equipos/plantilla"}
                            state={{ idTeam: team.id_team, teamName: `${team.club.name} - ${team.division.age_group} ${team.division.group}` }}
                            key={team.id_team}
                        >
                            <div className='menu-item__container'>
                                <img src={Global.url + "club/getClubShield/" + team.club.club_shield} alt={team.club.name + " - escudo"} className='menu-item-club-icon' />
                                <span className='menu-item-name menu-my-teams-name'>
                                    {team.club.name} - {team.division.age_group} {team.division.group}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    )
}
