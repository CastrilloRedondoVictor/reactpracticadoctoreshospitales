import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { NavLink } from 'react-router-dom'
import DetallesDoctor from './DetallesDoctor'

export default class Doctores extends Component {

    state = {
        doctores: [],
        idDoctor: -1
    }


    componentDidMount = () => {
        this.getDoctores()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.hosp != this.props.hosp){
            this.getDoctores()
        }
    }

    getDoctores = () => {
        let request = 'api/Doctores/DoctoresHospital/' + this.props.hosp
        axios.get(Global.apiDoctores + request).then((response) => {
            this.setState({
                doctores: response.data,
                idDoctor: -1
            })
        })
    }

    mostrarInfo = (id) => {
        this.setState({
            idDoctor: id
        })
    }

  render() {
    return (
      <div>
        <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">idDoctor</th>
                <th scope="col">apellido</th>
                <th scope="col">especialidad</th>
                <th scope="col">salario</th>
                <th scope="col">detalles</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores &&
                    (
                        this.state.doctores.map((doctor, index) => {
                            return(
                                <tr key={index}>
                                    <th key={index + 1} scope="row">{doctor.idDoctor}</th>
                                    <td key={index + 2}>{doctor.apellido}</td>
                                    <td key={index + 3}>{doctor.especialidad}</td>
                                    <td key={index + 4}>{doctor.salario}</td>
                                    <td key={index + 5}><button className='btn btn-light' onClick={() => {this.mostrarInfo(doctor.idDoctor)}}>DETALLES</button></td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
        {
            this.state.idDoctor != -1 &&
            (<DetallesDoctor id={this.state.idDoctor}></DetallesDoctor>)
        }
      </div>
    )
  }
}
