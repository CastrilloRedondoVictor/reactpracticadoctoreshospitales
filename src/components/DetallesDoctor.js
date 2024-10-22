import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global';

export default class DetallesDoctor extends Component {

    state = {
        doctor: null,
    }

    componentDidMount = () => {
        this.getDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id){
            this.getDoctor();
        }
    }

    getDoctor = () => {
        let request = 'api/Doctores/' + this.props.id
        axios.get(Global.apiDoctores + request).then((response) => {
            this.setState({
                doctor: response.data,
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.doctor ?
            (<div>
                <h1>Doctor {this.state.doctor.apellido}</h1>
                <h2>{this.state.doctor.idDoctor}</h2>
                <h2>{this.state.doctor.especialidad}</h2>
                <h2>{this.state.doctor.salario}</h2>
            </div>):
            (<div className="loader"></div>)
        }
      </div>
    )
  }
}
