import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from './Global';

export default class MenuHospitales extends Component {

    state = {
        hospitales: []
    }


    componentDidMount = () => {
        let request = '/webresources/hospitales'
        axios.get(Global.apiHospitales + request).then((response) => {
            this.setState({
                hospitales: response.data
            })
        })
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hospitales
                  </a>
                  <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    {
                            this.state.hospitales.map((hospital, index) => {
                                return(
                                    <li key={index-1}><NavLink key={index} className="dropdown-item bg-dark text-white" to={`/doctores/${hospital.idhospital}`}>{hospital.nombre}</NavLink></li>
                                )
                            })
                        }
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/hospitales/post">Añadir Hospital</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
