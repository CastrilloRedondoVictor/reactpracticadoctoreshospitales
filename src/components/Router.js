import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import MenuHospitales from './MenuHospitales'
import Doctores from './Doctores'
import DetallesDoctor from './DetallesDoctor'
import PostDoctor from './postDoctor'
import PostHospital from './PostHospital'

export default class Router extends Component {
  render() {

    function GetComponentDoctores () {
        let {hosp} = useParams()
        return <Doctores hosp={hosp} />
    }

    function GetComponentDetallesDoctor () {
        let {id} = useParams()
        return <DetallesDoctor id={id} />
    }

    return (
      <BrowserRouter>
        <MenuHospitales></MenuHospitales>
        <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path="/doctores/:hosp" element={ <GetComponentDoctores/> }/>
            <Route path="/detallesDoctor/:id" element={ <GetComponentDetallesDoctor/> }/>
            <Route path="/hospitales/post" element={ <PostHospital/> }/>

            <Route path='*' element={ <NotFound /> }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}
