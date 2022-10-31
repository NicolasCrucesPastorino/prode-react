import { puntaje } from '../../../../Constantes';
import ConsumerProdeContext from '../../ProdeProvider';

const Partido = ({ partido }) => {
	const { updatePartido, getPuntosPreliminaresByKey } =
		ConsumerProdeContext();

	const colorPuntaje = () => {
		console.log('puntaje', getPuntosPreliminaresByKey(partido.partidoid));
		switch (getPuntosPreliminaresByKey(partido.partidoid)) {
			case puntaje.puntajepreliminar.COINCIDENCIA_TOTAL:
				return 'green';
			case puntaje.puntajepreliminar.COINCIDENCIA_PARCIAL:
				return 'yellow';
			case puntaje.puntajepreliminar.NO_COINCIDENCIA:
				return 'red';
			default:
				return 'black';
		}
	};

	// const SIN_COINCIDENCIAS = '#ff6d4e';

	const handleOnChange = evento => {
		const goles = evento.target.value;

		if (evento.target.name === 'golesequipoA') {
			partido.golesequipoA = goles;
		}
		if (evento.target.name === 'golesequipoB') {
			partido.golesequipoB = goles;
		}

		updatePartido(
			partido.partidoid,
			partido.golesequipoA,
			partido.golesequipoB,
		);
	};

	const style = { height: '32px', weight: '32px' };
	const divstyle = { backgroundColor: colorPuntaje() };
	return (
		<div className='partidocontainer row' style={divstyle}>
			<p className='equipo col-md-2'>{partido.equipoA}</p>
			<input
				name='golesequipoA'
				style={style}
				className='col-md-2'
				type='number'
				onChange={handleOnChange}
				value={partido.golesequipoA}
			></input>

			<p className='col-md-1'> - </p>
			<input
				name='golesequipoB'
				style={style}
				className='col-md-2'
				type='number'
				onChange={handleOnChange}
				value={partido.golesequipoB}
			></input>
			<p className='equipo col-md-2'>{partido.equipoB}</p>
		</div>
	);
};

export default Partido;
