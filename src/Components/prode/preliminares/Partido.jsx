import { useState, useEffect } from 'react';
import { ROL } from '../../../Constantes';
import authconsumer from './../../../Hooks/UseAuth';
import { getresultadosuserprode } from './../../../database/services/resultadosService';
export const Partido = props => {
	const resultados = props.resultados;
	const setresultados = props.setresultados;
	const partido = props.partido;
	const uid = props.uid;

	const SIN_PUNTOS = '#FFFFFF';
	const SIN_COINCIDENCIAS = '#ff6d4e';
	const COINCIDENCIA_PARCIAL = '#FFFB13';
	const COINCIDENCIA_TOTAL = '#5EEA48';

	const consumer = authconsumer();

	const [resultadopuntos, setresultadopuntos] = useState([]);
	const [colorpuntos, setcolorpuntos] = useState(SIN_PUNTOS);
	console.log('id', uid);
	useEffect(() => {
		const getresultadopuntos = async () => {
			const resultadosprode = await getresultadosuserprode(uid);
			if (resultadosprode) {
				setresultadopuntos(
					resultadosprode.preliminares.find(
						r => r.partidoid === partido.partidoid,
					),
				);
				if (consumer.userauth.rol === ROL.GUEST) {
					setcolorpuntos(SIN_PUNTOS);
				} else {
					if (resultadopuntos.puntaje === 3) {
						setcolorpuntos(COINCIDENCIA_TOTAL);
					} else if (resultadopuntos.puntaje === 2) {
						setcolorpuntos(COINCIDENCIA_PARCIAL);
					} else if (resultadopuntos.puntaje === 0) {
						setcolorpuntos(SIN_COINCIDENCIAS);
					} else {
						setcolorpuntos(SIN_PUNTOS);
					}
				}
			}
		};
		getresultadopuntos().then();
	});
	console.log('resultado puntos', resultadopuntos);

	const handleOnChange = evento => {
		const goles = evento.target.value;

		try {
			if (evento.target.name === 'golesequipoA') {
				partido.setgolesequipoA(goles);
			} else if (evento.target.name === 'golesequipoB') {
				partido.setgolesequipoB(goles);
			}
			const grupoNombre = partido.partidoid.split('-')[0];
			const resultadosAuxiliar = [...resultados];
			const grupoIndex = resultadosAuxiliar.findIndex(
				grupo => grupo.nombre === grupoNombre,
			);
			const partidoIndex = resultadosAuxiliar[
				grupoIndex
			].partidos.findIndex(p => p.partidoid === partido.partidoid);
			resultadosAuxiliar[grupoIndex].partidos[partidoIndex] = partido;
			setresultados(resultadosAuxiliar);
		} catch (error) {
			console.error(error);
			alert(error.message);
		}
	};

	const style = { height: '32px', weight: '32px' };
	const divstyle = { backgroundColor: colorpuntos };
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
