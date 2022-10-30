import React, { useContext, useEffect, useState } from 'react';
import { getAuth } from './../firebase/firebase';
import { ROL } from '../Constantes';
import {
	storeUserData,
	getdatauserfromid,
} from './../database/services/usuariosService';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

// constante que maneja las keys donde se almacenaran las credenciales y objetos del usuario
const localStorageFolder = {
	AUTH: 'auth',
	TOKEN: 'token',
};

const authcontext = React.createContext();

const useAuth = () => {
	const auth = getAuthInstance();

	const initStateUserAuth =
		localStorage.getItem(localStorageFolder.AUTH) !== null
			? JSON.parse(localStorage.getItem(localStorageFolder.AUTH))
			: { rol: ROL.GUEST };

	const [userAuth, setUserAuth] = useState(initStateUserAuth);
	const [issigned, setIsSigned] = useState(false);

	useEffect(() => {
		if (
			userAuth.rol !== ROL.GUEST &&
			localStorage.getItem(localStorageFolder.TOKEN) !== null
		) {
			setsession(
				localStorage.getItem(localStorageFolder.TOKEN),
				userAuth,
			);
		}
	}, []);

	const registrarse = async (
		email,
		password,
		displayName,
		lastname,
		phone,
	) => {
		try {
			const usercredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);

			await storeUserData(
				usercredentials.user.uid,
				displayName,
				lastname,
				phone,
			);

			const newuser = {
				...usercredentials.user,
				lastname,
				displayName,
				phone,
			};
			setsession(usercredentials.user.accessToken, newuser);

			return usercredentials;
		} catch (error) {
			throw error;
		}
	};

	const logearseEnTuProde = async (email, password) => {
		try {
			const usercredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);

			const userdata = await getdatauserfromid(usercredentials.user.uid);
			const totaldata = {
				...userdata,
				email: usercredentials.user.email,
				uid: usercredentials.user.uid,
				photoURL: usercredentials.user.photoURL,
			};

			setsession(usercredentials.user.accessToken, totaldata);
			return usercredentials;
		} catch (error) {
			throw error;
		}
	};

	const signedout = () => {
		getAuth().signOut();
		setIsSigned(false);
		localStorage.removeItem(localStorageFolder.TOKEN);
		localStorage.removeItem(localStorageFolder.AUTH);
	};

	const isSigned = () => {
		return issigned;
	};

	const setsession = (token, user) => {
		setIsSigned(true);

		const updateUserAuth = {
			email: user.email,
			displayName: user.displayName,
			lastname: user.lastname || '',
			phone: user.phone || '',
			image: user.photoURL || '',
			uid: user.uid,
			rol:
				user.email === process.env['REACT_APP_ADMIN_USER']
					? ROL.ADMIN
					: ROL.USER,
		};

		setUserAuth(updateUserAuth);

		localStorage.setItem(localStorageFolder.TOKEN, token);
		localStorage.setItem(
			localStorageFolder.AUTH,
			JSON.stringify(updateUserAuth),
		);

		return issigned;
	};

	return {
		signedout,
		isSigned,
		userauth: userAuth,
		registrarse,
		logearseEnTuProde,
	};
};

const getAuthInstance = () => {
	const auth = getAuth();
	return auth;
};

// Componente proveedor de contexto de autenticacion
export const AuthProvider = ({ children }) => {
	const auth = useAuth();

	return <authcontext.Provider value={auth}>{children}</authcontext.Provider>;
};

// Hook para consumir el contexto de autenticacion
const AuthConsumer = () => useContext(authcontext);
export default AuthConsumer;
