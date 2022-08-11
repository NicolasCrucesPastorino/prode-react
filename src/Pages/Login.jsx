import React from 'react'

import Authconsumer from '../Hooks/UseAuth'


export const Login = () => {

    const {userauth,signedout,signin,isSigned} = Authconsumer()
  return (
    <div>
        
      <header className="App-header">
        <h1>TU PRODE</h1>
        <img src='https://www.benditofutbol.com/files/article_main/uploads/2014/09/05/5409da78a6a0f.jpg' />
        
        <p>
          {isSigned() ? userauth.name : 'No Estas Autenticado'}
        </p>
        {isSigned() ? <button onClick={signedout}>Sign Out</button> : <button onClick={signin}>Sign-in con Google</button>}
        
      </header>
    </div>
  )
}
