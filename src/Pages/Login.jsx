import React from 'react'
import GoogleButton from 'react-google-button'
import {useNavigate} from 'react-router-dom'
import Authconsumer from '../Hooks/UseAuth'


export const Login = () => {

    const {userauth,signedout,signin,isSigned} = Authconsumer()
    const navigate=useNavigate()
    const handleOnClickRegister = () => {
      navigate('/register')
    }
  return (
    <div>
        
      <header className="App-header">
        <h1>TU PRODE</h1>
        <img src='https://www.benditofutbol.com/files/article_main/uploads/2014/09/05/5409da78a6a0f.jpg' />
        
        <p>
          {isSigned() ? userauth.name : 'No Estas Autenticado'}
        </p>
        <GoogleButton onClick={signin}>Sign-in con Google</GoogleButton>
        <button className='btn btn-primary' onClick={handleOnClickRegister}>Regristrate</button>
        <button className='btn btn-secondary' onClick={()=>{navigate('/logintuprode')}}>Sign-in con TU PRODE</button>
        
      </header>
    </div>
  )
}
