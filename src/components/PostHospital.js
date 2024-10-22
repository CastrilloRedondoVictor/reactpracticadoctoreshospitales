import axios from 'axios';
import React, { Component } from 'react'
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class PostHospital extends Component {


  inpId = React.createRef();
  inpNombre = React.createRef();
  inpDireccion = React.createRef();
  inpTelefono = React.createRef();
  inpCamas = React.createRef();


  state = {
    creado: false
  }




  componentDidMount = () => {
    this.setState({
      creado: false
    })
  }



  nuevoDoctor = (e) => {
    e.preventDefault();

    let idHospital = parseInt(this.inpId.current.value)
    let nombre = this.inpNombre.current.value
    let direccion = this.inpDireccion.current.value
    let telefono = this.inpTelefono.current.value
    let camas = parseInt(this.inpCamas.current.value)

    let data = {
      idhospital: idHospital,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas
    }

    let request = 'webresources/hospitales/post'

    axios.post(Global.apiHospitales + request, data).then((response) => {
      this.setState({
        creado: true
      })
    })
  }
  

  render() {
    return (
      <div>

        <h1>Añadir Hospital</h1>

        <form onSubmit={this.nuevoDoctor}>

          <div className="m-3 w-25">
            <label className="form-label">ID HOSPITAL</label>
            <input type="number" className="form-control" ref={this.inpId} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">NOMBRE</label>
            <input type="text" className="form-control" ref={this.inpNombre} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">DIRECCION</label>
            <input type="text" className="form-control" ref={this.inpDireccion} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">TELEFONO</label>
            <input type="text" className="form-control" ref={this.inpTelefono} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">CAMAS</label>
            <input type="number" className="form-control" ref={this.inpCamas} />
          </div>

          <button type="submit" className="btn btn-primary m-3 w-25">AÑADIR</button>

        </form>

        {
          this.state.creado &&
          (<Navigate to='/hospitales/' />)
        }

      </div>
    )
  }
}
