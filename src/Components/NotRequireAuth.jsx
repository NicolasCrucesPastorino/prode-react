import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Authconsumer from '../Hooks/UseAuth'

export const NotRequireAuth = (props) => {
    const children = props.children;
    const redirectTo = props.redirectTo || '/home';
    const {isSigned} = Authconsumer();

    if (isSigned()) {
        return <Navigate to={redirectTo} />
    }

    return children? children : <Outlet />
}
