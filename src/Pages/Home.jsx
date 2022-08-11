import React from 'react'
import AuthConsumer from './../Hooks/UseAuth'

export const Home = () => {

  const {signedout} = AuthConsumer()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signedout}>Log Out</button>
    </div>
  )
}
