import React,{useState} from 'react'
import Authconsumer from '../Hooks/UseAuth'

export const Register = () => {
  const {registrarse} = Authconsumer()
  const inputinicial={
    email:'',
    name:'',
    lastname:'',
    phone:'',
    password:'',
    repeatpassword:'',
  }
  const [input, setinput] = useState(inputinicial)

  const handleOnChange = (evento) => {
    setinput({...input, [evento.target.name]:evento.target.value})
  }
  const handleOnSubmit= (evento) => {
    evento.preventDefault()
    console.log(input)
    if(input.name === '' || input.email === '' || input.lastname=== '' || input.phone=== '' || input.password=== '' || input.repeatpassword=== ''){
      alert('Debe completar todos los campos')
      return
    }

    if(input.password!=input.repeatpassword){
      alert('Las contraseñas no coinciden')
      return
    }
    if(input.password.length<=6){
      alert('La contraseña debe poseer mas 6 caracteres')
      return
    }

  registrarse(input.email,input.password) .then(authusercredentials => {console.log(authusercredentials)}) .catch(error => console.log(error))
      alert('Formulario recibido')
  }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label className='form-label'>Email:</label>
            <input className='form-control' type="text" name='email'  onChange={handleOnChange}></input>
            <label className='form-label'>Nombre:</label>
            <input className='form-control' type="text" name='name' onChange={handleOnChange}></input>
            <label className='form-label'>Apellido:</label>
            <input className='form-control' type="text" name='lastname' onChange={handleOnChange}></input>
            <label className='form-label'>Teléfono:</label>
            <input className='form-control' type="text" name='phone' onChange={handleOnChange}></input>            
            <label className='form-label'>Contraseña:</label>
            <input className='form-control' type='password' name='password' onChange={handleOnChange}></input>
            <label className='form-label'>Repita contraseña:</label>
            <input className='form-control' type='password' name='repeatpassword' onChange={handleOnChange}></input>
            <button className='btn btn-primary'type='submit' >Registrar</button>
        </form>
    </div>
  )
}
