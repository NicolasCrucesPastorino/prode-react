import React,{useState} from 'react'
import authconsumer from './../Hooks/UseAuth'
import { useFirestore } from '../Hooks/useFirestore'
export const FormularioLoginTuProde = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const consumer = authconsumer()
    const firestore = useFirestore()
    const handleOnSubmit = (evento) => {
        evento.preventDefault()
    consumer.logearseEnTuProde(email,password).then(response => console.log('autenticado'))
    .catch(error => console.log('error',error))
    }

    const handleOnChangeEmail = (evento) => {
        setemail(evento.target.value)
    }
    const handleOnChangePassword = (evento) => {
        setpassword(evento.target.value)
    }
  return (
    <div>
       
        <form onSubmit={handleOnSubmit}>
            <label className='form-label'>Email:</label>
            <input className='form-control' type="email" name='email'  onChange={handleOnChangeEmail}></input>
            <label className='form-label'>Contraseña:</label>
            <input className='form-control' type="password" name='password' onChange={handleOnChangePassword}></input>
            <button type='submit'>Log-in</button>
        </form>
    </div>
  )
}
