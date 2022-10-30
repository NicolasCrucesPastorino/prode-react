import { Navigate, Outlet } from 'react-router-dom';
import Authconsumer from '../Hooks/UseAuth';

export const NotRequireAuth = ({ redirectTo = '/home', children }) => {
	const { isSigned } = Authconsumer();

	if (isSigned()) {
		return <Navigate to={redirectTo} remplace />;
	}

	return children || <Outlet />;
};
