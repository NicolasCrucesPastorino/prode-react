import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { NotRequireAuth } from '../Components/NotRequireAuth'
import { RequireAuth } from '../Components/RequireAuth'
import { BracketPage } from '../Pages/BracketPage'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
import { Reglas } from '../Pages/Reglas'
import { Tabla } from '../Pages/Tabla'
import { TuProde } from '../Pages/TuProde'

export const Mainroutes = () => {
  return (
   <Routes>
        
        
        <Route path='/' element={<RequireAuth redirectTo='/login'>
        <Home/>
        </RequireAuth>}
        />
       
        <Route path='/login'  element = {<NotRequireAuth redirectTo='/'><Login></Login></NotRequireAuth>}/>
        <Route path='/reglas'  element = {<Reglas></Reglas>}/>
        <Route path='/tabla'  element = {<Tabla></Tabla>}/>
        <Route path='/tuprode'  element = {<TuProde></TuProde>}/>
        <Route path='/register'  element = {<Register/>}/>
        <Route path='/bracket'  element = {<BracketPage/>}/>
   </Routes>
  )
}
