import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Preliminares } from '../Components/prode/preliminares/Preliminares';
import { BracketEstatico } from '../Components/prode/torneo/estatico/BracketEstatico';
import { getprodeporid } from '../database/services/prodeService';
import { getresultadosuserprode } from '../database/services/resultadosService';
import { getdatauserfromid } from '../database/services/usuariosService';

export const ProdeDetalle = () => {
	const param = useParams();
	const [prode, setProde] = useState({});
	const [user, setUser] = useState({});
	const [resultados, setResultados] = useState({});

	useEffect(() => {
		const getprodefromdatabase = async () => {
			const prodeAux = await getprodeporid(param.uid);
			setProde(prodeAux);

			const userAux = await getdatauserfromid(param.uid);
			setUser(userAux);

			const resultadosAux = await getresultadosuserprode(param.uid);
			setResultados(resultadosAux);
		};
		getprodefromdatabase().then();
	}, []);

	console.log(prode);
	return (
		<div>
			<h1>Prode de {user.displayName}</h1>
			<section>
				<article>
					<h2>Fase de grupos</h2>
					{prode.resultados ? (
						<Preliminares
							resultados={prode.resultados}
							uid={param.uid}
						/>
					) : (
						<h2>Cargando datos...</h2>
					)}
				</article>

				<article>
					<h2>Llaves</h2>
					{prode.torneo ? (
						<BracketEstatico
							torneo={prode.torneo}
							octavos={prode.octavos}
							resultados={resultados}
						/>
					) : (
						<h2>Cargando ...</h2>
					)}
				</article>
			</section>
		</div>
	);
};
