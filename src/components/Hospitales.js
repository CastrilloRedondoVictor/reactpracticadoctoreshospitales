import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class Hospitales extends Component {


    state = {
        hospitales: [],
    }

    getHospitales = () => {
      let request = '/webresources/hospitales'
        axios.get(Global.apiHospitales + request).then((response) => {
            this.setState({
                hospitales: response.data
            })
        })
    }


    componentDidMount = () => {
        this.getHospitales()
    }

  render() {
    return (
      <div>
        <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">idhospital</th>
                <th scope="col">nombre</th>
                <th scope="col">direccion</th>
                <th scope="col">telefono</th>
                <th scope="col">camas</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales &&
                    (
                        this.state.hospitales.map((hospital, index) => {
                            return(
                                <tr key={index}>
                                    <th key={index + 1} scope="row">{hospital.idhospital}</th>
                                    <td key={index + 2}>{hospital.nombre}</td>
                                    <td key={index + 3}>{hospital.direccion}</td>
                                    <td key={index + 4}>{hospital.telefono}</td>
                                    <td key={index + 5}>{hospital.camas}</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
