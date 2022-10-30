import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getdatauserfromid } from '../database/services/usuariosService';

export const FilaResultado = props => {
	const index = props.index;
	const resultado = props.resultado;
	console.log('res', resultado);

	const [filaresultado, setfilaresultado] = useState({
		posicion: 1,
		nombre: '',
		puntaje: 0,
	});
	useEffect(() => {
		const cargardatos = async () => {
			const usuario = await getdatauserfromid(resultado.userid);
			console.log('usuario', usuario);
			setfilaresultado({
				...filaresultado,
				nombre: usuario.displayName,
				puntaje: resultado.puntajetotal,
				posicion: index,
				uid: resultado.userid,
			});
		};
		cargardatos().then();
	}, []);
	return (
		<tr>
			<th scope='row'>{filaresultado.posicion + 1}</th>
			<td>
				<Link to={'/prode/' + filaresultado.uid}>
					{filaresultado.nombre}
				</Link>
			</td>
			<td>{filaresultado.puntaje}</td>
		</tr>
	);
};
