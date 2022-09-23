import React from 'react'
import AuthConsumer from './../Hooks/UseAuth'

export const Home = () => {

  const {signedout} = AuthConsumer()
  return (
    <div>
      <h1>Home</h1>
      <section>
        <h2>Personas inscriptas</h2>
        <p>{process.env.REACT_APP_CANTIDAD_USUARIOS}</p>
      </section>
      <button onClick={signedout} className='btn btn-danger'>Log Out</button>
    </div>
  )
}
