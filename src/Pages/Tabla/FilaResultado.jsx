import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getdatauserfromid } from '../../database/services/usuariosService';

const FilaResultado = ({ index, resultado }) => {
	const [filaresultado, setfilaresultado] = useState({
		posicion: '',
		nombre: '',
		puntaje: '',
		uid: '',
	});

	useEffect(() => {
		const cargardatos = async () => {
			const usuario = await getdatauserfromid(resultado.userid);
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

export default FilaResultado;
