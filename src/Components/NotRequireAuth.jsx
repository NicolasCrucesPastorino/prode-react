import React from 'react'
import { Navigate } from 'react-router-dom'
import Authconsumer from '../Hooks/UseAuth'

export const NotRequireAuth = (props) => {
    const children = props.children
    const redirectTo = props.redirectTo

    const {isSigned} = Authconsumer()

  return (
    isSigned()? <Navigate to={redirectTo}/> : children 
  )
}
