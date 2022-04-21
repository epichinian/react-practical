import React, { Component } from 'react'

export default class ListarEstudiantes extends Component {

    constructor(props) {
        super(props)
        this.limpiar = this.limpiar.bind(this)
        this.listarEstudiantes = this.listarEstudiantes.bind(this)
        this.state = {
            estudiantes: [],
            resultado : ''
        }
    }

    limpiar(){
        this.setState({
            estudiantes: []
        })
    }

    listarEstudiantes() {
        fetch("http://localhost:1234/estudiantes")
        .then((response) => (response.json()))
        .then((json) => (
            this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result
            })
        ))
    }

    listarCursosEstudiante(apellido) {
        console.log('ingreso')
        fetch("http://localhost:1234/estudiantes?apellido="+apellido)
        .then((response) => (response.json()))
        .then((json) => (
            this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result
            })
        ))
    }

    render() {
        return (
            <div>
                <button onClick={this.listarEstudiantes}>Listar Estudiantes</button>
                <button onClick={this.listarCursosEstudiante.bind(this, "Pichiñan")}>Listar Estudiante</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <table>
                    <thead>
                        <tr>
                            <td>Apellido</td>
                            <td>Nombre</td>
                            <td>Curso</td>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.estudiantes.map((est, index) => (
                                (est.cursos) ? est.cursos.map((cur, index) => (
                                    <tr>
                                        <td>{est.apellido}</td>
                                        <td>{est.nombre}</td>
                                        <td>{cur.nombre}</td>
                                    </tr>
                                )) : ''
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
