
import React, { Component } from 'react'
import './Persona.css'

const styles = {
    borderRadius: "5px",
    margin: "16px",
    padding: "16px",
    marginLeft: "450px",
    marginRight: "450px",
    boxShadow: "0 2px 5px 0 #ccc",
    textAlign: "center",
}

export default class Persona extends Component {

  render() {

    let nombre = 'Edgardo José';
    let apellido = 'Pichiñan Galdeano'

    let obj = {
        nombre: "Edgardo",
        apellido: 'Pichiñan'
    }

    return (
//      <div style= {estilo}>
        <div className='estilo'>
          <p>{this.props.persona.apellido + " " + this.props.persona.nombre }</p>
      </div>
    )
  }
}
