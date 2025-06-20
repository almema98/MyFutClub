import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Global } from '../../helpers/Global';
import avatar from '../../assets/img/default.png';
import { calculateAge } from '../../helpers/CalculateAge';

export const SquadList = () => {

    // Use the location hook to get the id_team from the parent component.
    const location = useLocation();
    const { idTeam, teamName } = location.state;

    const [squad, setSquad] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSquad();
    }, []);


    const getSquad = async () => {
        // API request
        const squadResult = await fetch(Global.url + "team/squadList/" + idTeam, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        });

        const squadData = await squadResult.json();

        setSquad([...squadData.players]);
        setLoading(false);
    }

    if (loading) {
        return (<p>Cargando...</p>)
    } else {
        return (
            <>
                <h1 className='title'>{teamName}</h1>

                <table className='squad-list'>
                    <tbody className='squad-list__container'>
                        <tr className='squad-list-row'>
                            <td>Foto</td>
                            <td>Jugador</td>
                            <td>Posición</td>
                            <td>Edad</td>
                            <td>Nacionalidad</td>
                        </tr>
                        {squad.map(player => {
                            return (
                                <tr key={player.id_user} className='squad-list-row'>
                                    <td>
                                        <div className='avatar-squad-list__container'>
                                            {player.profile_image !== "default.png"
                                                ?
                                                <img src={Global.url + "user/avatar/" + player.profile_image} alt='Imagen jugador' className='avatar-squad-list' />
                                                :
                                                <img src={avatar} alt='Imagen jugador' className='avatar-squad-list' />
                                            }
                                        </div>

                                    </td>
                                    <td>
                                        {player.name} {player.surname}
                                    </td>
                                    <td>
                                        MCD
                                    </td>
                                    <td>
                                        {calculateAge(player.date)}
                                    </td>
                                    <td>
                                        {player.country}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }

}
