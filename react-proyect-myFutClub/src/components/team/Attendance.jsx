import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Global } from '../../helpers/Global';
import { squadTeam } from '../../helpers/GetSquad';

export const Attendance = () => {

	const location = useLocation();
	const { idTeam, teamName, clubShield } = location.state;

	const [squad, setSquad] = useState([]);
	const [loading, setLoading] = useState(true);
	const [date, setDate] = useState('');

	useEffect(() => {
		getSquad();

		const dateNow = new Date();
		setDate(`${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`)

		setLoading(false);
	}, []);


	const getSquad = async () => {
		const squadData = await squadTeam(idTeam);
		setSquad([...squadData.players]);
	}

	if (loading) {
		return (<p>Cargando...</p>)
	} else {
		return (
			<>
				<h1 className='title'>{teamName}</h1>

				<img src={Global.url + "club/getClubShield/" + clubShield} alt={teamName + " - escudo"} className='club-shield-team' />

				<div className='content__container menu__container menu-attendance'>

					<section className='date-now-attendance__container'>
						<p>Fecha: {date}</p>
					</section>

					<form className='attendance-form'>
						<section className='attendance-table'>
							<div className='attendance-table-row attendance-table-legend'>
								<div className='attendance-table-player-column'>
									<span>Jugador</span>
								</div>
								<div className='attendance-table-attendance-column'>
									<span>Asiste</span>
								</div>
							</div>
							{squad.map(player => {
								return (
									<div className='attendance-table-row'>
										<div className='attendance-table-player-column' key={player.id_user}>
											<label>{player.name} {player.surname}</label>
										</div>
										<div className='attendance-table-attendance-column'>
											<input type='checkbox' />
										</div>
									</div>
								);
							})}
						</section>
					</form>

				</div>
			</>
		)
	}
}
