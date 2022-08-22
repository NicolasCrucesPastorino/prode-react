import React,{useState} from 'react'

export const FormularioLoginTuProde = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleOnSubmit = (evento) => {

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
            <input className='form-control' type="text" name='email'  onChange={handleOnChangeEmail}></input>
            <label className='form-label'>Contraseña:</label>
            <input className='form-control' type="text" name='password' onChange={handleOnChangePassword}></input>
            <button type='submit'>Log-in</button>
        </form>
    </div>
  )
}
