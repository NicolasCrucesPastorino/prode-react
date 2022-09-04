import React from 'react'
import AuthConsumer from './../Hooks/UseAuth'

export const Home = () => {

  const {signedout} = AuthConsumer()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signedout} className='btn btn-danger'>Log Out</button>
    </div>
  )
}
