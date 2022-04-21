import React, { Component } from 'react'

export default class Cursos extends Component {

    constructor(props) {
        super(props)
        this.listarCursos = this.listarCursos.bind(this)
        this.limpiarCursos = this.limpiarCursos.bind(this)
        this.limpiarCursosEstudiante = this.limpiarCursosEstudiante.bind(this)
        this.state = {
            cursos: [],
            estudiantes: []
        }
    }

    listarCursos(){
        fetch("http://localhost:1234/cursos")
        .then((response) => (response.json()))
        .then((json) => (
            this.setState({
                cursos: json.cursos,
                resultado: json.result
            })))
    }

    limpiarCursos() {
        this.setState({cursos: []})
    }

    listarCursosEstudiante(apellido){
        fetch("http://localhost:1234/estudiantes?apellido="+apellido)
        .then((response) => (response.json()))
        .then((json) => (
            this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result
            })))
    }

    limpiarCursosEstudiante() {
        this.setState({estudiantes: []})
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.listarCursos}>Listar Cursos</button>
                    <button onClick={this.limpiarCursos}>Limpiar Cursos</button>
                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Cantidad de Hs</td>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.cursos.map((cur, index) => (
                                    <tr>
                                        <td>{cur.nombre}</td>
                                        <td>{cur.cantHs}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div>
                <button onClick={this.listarCursosEstudiante.bind(this, "Pichiñan")}>Listar Cursos Estudiante</button>
                <button onClick={this.limpiarCursosEstudiante}>Limpiar Cursos Estudiante</button>
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
        </>
        )
    }
}
