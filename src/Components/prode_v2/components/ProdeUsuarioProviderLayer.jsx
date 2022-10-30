import React, { useState, useEffect } from 'react';
import { ProdeProvider } from '../ProdeProvider';
import Loading from '../../Loading';
import { useNavigate } from 'react-router-dom';

const ProdeUsuarioProviderLayer = ({ uid, prodeFontFunction, children }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [globalProde, setGlobalProde] = useState({});

	const childWithProps = React.Children.map(children, child => {
		return React.cloneElement(child, { ...child.props, uid });
	});

	useEffect(() => {
		const getProdeById = async (uid = '') => {
			const prode = await prodeFontFunction(uid);
			setIsLoading(false);
			setGlobalProde(prode === null ? {} : prode);
			setIsLoading(true);
		};
		getProdeById(uid)
			.then(() => {
				console.log('Prode cargado');
			})
			.catch(error => {
				console.error(error);
				setIsLoading(false);
				// alert("no tiene permisos para ver este prode");
				navigate('/reglas');
			});
	}, [uid]);

	return (
		<>
			{isLoading === false ? (
				<Loading />
			) : (
				<ProdeProvider prode={globalProde}>
					{childWithProps}
				</ProdeProvider>
			)}
		</>
	);
};

export default ProdeUsuarioProviderLayer;