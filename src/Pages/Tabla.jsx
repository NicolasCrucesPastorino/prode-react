import { useEffect, useState } from 'react';
import { getAllProdesResultados } from './../database/services/resultadosService';
import { FilaResultado } from '../Components/FilaResultado';

export const Tabla = () => {
	const [resultados, setresultados] = useState([]);

	useEffect(() => {
		const obtenerYordenarResultados = async () => {
			const resultados = await getAllProdesResultados();
			resultados.forEach(resultado => {
				const getPuntajeTotalByResultado = resultado => {
					const puntajetorneo = Object.values(
						resultado.torneo,
					).reduce((a, b) => a + b, 0);
					const puntajepreliminar = Object.values(
						resultado.preliminares,
					).reduce((a, b) => a + b, 0);
					return puntajetorneo + puntajepreliminar;
				};

				resultado.puntajetotal = getPuntajeTotalByResultado(resultado);
			});

			const ordenarpuntajemayor = (a, b) => {
				if (a.puntajetotal < b.puntajetotal) {
					return 1;
				} else {
					return -1;
				}
			};

			if (resultados && resultados.length > 0) {
				const resultadosordenados =
					resultados.sort(ordenarpuntajemayor);
				console.log('resord', resultadosordenados);
				setresultados(resultadosordenados);
			}
		};
		obtenerYordenarResultados().then();
	}, []);
	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Puesto</th>
						<th scope='col'>Nombre</th>
						<th scope='col'>Puntaje</th>
					</tr>
				</thead>
				<tbody>
					{resultados.length === 0 ? (
						<tr>
							<td>sin resultados</td>{' '}
						</tr>
					) : (
						resultados.map((resultado, index) => (
							<FilaResultado
								key={index}
								index={index}
								resultado={resultado}
							/>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};
