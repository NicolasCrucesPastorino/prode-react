import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getdatauserfromid } from '../database/services/usuariosService';
import ProdeUsuario from './../Components/prode_v2/components/ProdeUsuario';

export const ProdeDetalle = () => {
	const param = useParams();
	const [user, setUser] = useState({});
	useEffect(() => {
		const getprodefromdatabase = async () => {
			const u = await getdatauserfromid(param.uid);
			setUser(u);
		};
		getprodefromdatabase().then();
	}, []);

	return (
		<section>
			<header>
				<h1>Prode de {user.displayName}</h1>
			</header>
			<ProdeUsuario uid={param.uid} isEditable={false} />
		</section>
	);
};
