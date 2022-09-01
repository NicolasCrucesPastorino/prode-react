import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { NotRequireAuth } from '../Components/NotRequireAuth'
import { RequireAuth } from '../Components/RequireAuth'
import { BracketPage } from '../Pages/BracketPage'
import { FormularioLoginTuProde } from '../Pages/FormularioLoginTuProde'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
import { Reglas } from '../Pages/Reglas'
import { SuperProde } from '../Pages/SuperProde'
import { Tabla } from '../Pages/Tabla'
import { TuProde } from '../Pages/TuProde'

export const Mainroutes = () => {
  return (
   <Routes>
        
        <Route element={ <NotRequireAuth redirectTo={'/'} /> } >
        {/* rutas que no se pueden acceder al estar logueado*/}  
          <Route exact path='login'  element = {<Login/>} />
          <Route exact path='register'  element = {<Register/>} />
          <Route exact path='logintuprode' element = {<FormularioLoginTuProde/>} />
        </Route>
        
        <Route element={ <RequireAuth/> } >
        {/* rutas que se pueden acceder al estar logueado*/}
          <Route index element={<Home/>} />
          <Route path='tuprode' element = {<TuProde/>} />
        </Route>
      
        {/* Rutas totalemnte publicas */}       
        <Route path='reglas'  element = {<Reglas/>} />
        <Route path='tabla'  element = {<Tabla/>} />
        <Route path='bracket'  element = {<BracketPage/>} />
        <Route path='superprode' element = {<SuperProde/>} />

        {/* Rutas que no existen */}
        <Route path='*' element={<h1>404: Not Found</h1>} />
      
   </Routes>
  )
}
