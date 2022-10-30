import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Authconsumer from '../Hooks/UseAuth';

export const RequireAuth = ({ redirectTo = '/login', children }) => {
	const { isSigned } = Authconsumer();

	if (!isSigned()) {
		return <Navigate to={redirectTo} remplace />;
	}

	return children ? children : <Outlet />;
};
