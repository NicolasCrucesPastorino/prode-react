import React from 'react'

export const Register = () => {

  return (
    <div>
        <form>
            <label className='form-label'>Usuario:</label>
            <input className='form-control' type="text" name='name' id='name'></input>
            <label className='form-label'>Nombre:</label>
            <input className='form-control' type="text" name='name' id='name'></input>
            <label className='form-label'>Apellido:</label>
            <input className='form-control' type="text" name='name' id='name'></input>
            <label className='form-label'>Teléfono:</label>
            <input className='form-control' type="text" name='name' id='name'></input>            
            <label className='form-label'>Contraseña:</label>
            <input className='form-control' type='password'></input>
            <label className='form-label'>Repita contraseña:</label>
            <input className='form-control' type='password'></input>
            <button className='btn btn-primary'type='submit'>Registrar</button>
        </form>
    </div>
  )
}
