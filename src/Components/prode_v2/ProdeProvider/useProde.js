import { useState } from 'react';
import { equipos } from '../../../Constantes';
import { gruposEtapaPreliminares } from '../../../constants/grupos_etapa_preliminares';
import Grupo from '../../prode/preliminares/Models/Grupo';
import {
	crearResultado,
	generarPuntosIniciales,
} from '../utils/resultadosGenerator';
import { getSuperProde } from '../../../database/services/superProdeService';
import { storeresultadosuserprode } from '../../../database/services/resultadosService';

export const useProde = (prode = {}, puntos = generarPuntosIniciales()) => {
	const resultadosPorDefecto = gruposEtapaPreliminares.map(
		grupo => new Grupo(grupo.nombre, grupo.partidos),
	);

	const octavosPorDefecto = () => {
		const octavosPorDefecto = {};
		console.log('generando nuevos octavos');
		Object.keys(equipos).forEach(grupoNombre => {
			const letraGrupo = grupoNombre.split('grupo')[1].toLowerCase();
			octavosPorDefecto[`1-${letraGrupo}`] = '';
			octavosPorDefecto[`2-${letraGrupo}`] = '';
		});
		return octavosPorDefecto;
	};

	const torneoPorDefecto = {
		campeon: '',
		tercero: '',
		'cuartos-a-1': '',
		'cuartos-a-2': '',
		'cuartos-b-1': '',
		'cuartos-b-2': '',
		'cuartos-c-1': '',
		'cuartos-c-2': '',
		'cuartos-d-1': '',
		'cuartos-d-2': '',
		'semi-a-1': '',
		'semi-a-2': '',
		'semi-b-1': '',
		'semi-b-2': '',
		'final-a': '',
		'final-b': '',
	};

	const {
		resultados = resultadosPorDefecto,
		octavos = octavosPorDefecto(),
		torneo = torneoPorDefecto,
	} = prode;

	if (resultados && !resultados.every(grupo => grupo instanceof Grupo)) {
		throw new Error('Resultados must be an array of Grupo objects');
	}

	const [_resultados, _setResultados] = useState(resultados);
	const [_octavos, setOctavos] = useState(octavos);
	const [_torneo, _setTorneo] = useState(torneo);
	const [_puntos, _setPuntos] = useState(puntos);

	function getPartidoById(id) {
		const groupName = id.split('-')[0];
		return _resultados
			.find(grupo => grupo.nombre === groupName)
			.partidos.find(partido => partido.partidoid === id);
	}

	function updatePartido(partidoId, golesequipoA = '', golesequipoB = '') {
		const partido = getPartidoById(partidoId);
		_setResultados(
			_resultados.map(grupo => {
				if (grupo.nombre === partido.gruponombre()) {
					grupo.partidos = grupo.partidos.map(partido => {
						if (partido.partidoid === partidoId) {
							partido.setgolesequipoA(golesequipoA);
							partido.setgolesequipoB(golesequipoB);
						}
						return partido;
					});
				}
				return grupo;
			}),
		);
	}

	function updateOctavos(key_octavos, value) {
		validateOctavosKey(key_octavos);
		setOctavos({ ..._octavos, [key_octavos]: value });
	}

	function getOctavoByKey(key_octavos) {
		validateOctavosKey(key_octavos);
		return _octavos[key_octavos];
	}

	function validateOctavosKey(key_octavos) {
		if (!Object.keys(_octavos).includes(key_octavos))
			throw new Error('Invalid octavos key');
	}

	function getTorneoByKey(key_torneo) {
		validateTorneoKey(key_torneo);
		return _torneo[key_torneo];
	}

	function updateTorneo(key_torneo, value) {
		validateTorneoKey(key_torneo);
		_setTorneo({ ..._torneo, [key_torneo]: value });
	}

	function validateTorneoKey(key_torneo) {
		if (!Object.keys(_torneo).includes(key_torneo))
			throw new Error('Invalid torneo key');
	}

	function getPuntosPreliminaresByKey(key_puntos) {
		return _puntos.preliminares[key_puntos];
	}

	function getPuntosTorneoByKey(key_puntos) {
		return _puntos.torneo[key_puntos];
	}

	async function updatePuntaje(uid) {
		const superProde = await getSuperProde();
		const puntajeResultados = crearResultado(
			{
				resultados: _resultados,
				octavos: _octavos,
				torneo: _torneo,
			},
			superProde,
		);
		await storeresultadosuserprode(uid, puntajeResultados);
	}

	return {
		resultados: _resultados,
		octavos: _octavos,
		prode: { resultados: _resultados, octavos: _octavos, torneo: _torneo },
		getPartidoById,
		updatePartido,
		updateOctavos,
		getOctavoByKey,
		getTorneoByKey,
		updateTorneo,
		getPuntosPreliminaresByKey,
		getPuntosTorneoByKey,
		updatePuntaje,
	};
};
