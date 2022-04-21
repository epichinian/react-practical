import React, { Component } from 'react'

export default class CrearEstudiante extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cursos: [],
            form: {
                apellido: '',
                nombre: '',
                curso: ''
            },
            resultado: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:1234/cursos")
        .then((response) => (response.json()))
        .then((json) => (
            this.setState({
                cursos: json.cursos
            })
        ))
    }

    handleChange(e) {
        let nombre = e.target.name
        let valor = e.target.value

        this.setState((state) => ({
            form: {
                ...state.form,
                [nombre]: valor
            }
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('ingreso')
        fetch("http://localhost:1234/estudiantes", {
            method: 'POST',
            body: JSON.stringify({
                nombre: this.state.form.nombre,
                apellido: this.state.form.apellido,
                cursos: [this.state.form.curso]
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.result === 'error'){
                this.setState({
                    resultado: json.message
                })
                return;
            }
            this.setState({
                resultado: 'La persona fue creada con éxito'
            })
        })
    }

    render() {
        return (
            <div>
                <form>
                    <select name='curso' onChange={this.handleChange}>
                        {this.state.cursos.map((cur) => (
                            <option value={cur.nombre}>{cur.nombre}</option>
                        ))}
                    </select>
                    <label>
                        Apellido
                    </label>
                    <input type='text' name='apellido' value={this.state.form.apellido} onChange={this.handleChange}/>

                    <label>
                        Nombre
                    </label>
                    <input type='text' name='nombre' value={this.state.form.nombre} onChange={this.handleChange}/>

                    <button type='submit' onClick={this.handleSubmit}>Guardar</button>
                </form>
                <p>{this.state.resultado}</p>
            </div>
        )
    }
}
