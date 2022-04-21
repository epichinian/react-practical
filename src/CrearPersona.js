import React, { Component } from 'react'

export default class CrearPersona extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            form: {
                nombre: '',
                apellido: '',
                direccion: '',
                telefono: '',
                localidad: ''
            },
            localidades: [],
            resultado: ''
        }
    }

    handleChange(e) {
        let nombre = e.target.name
        let value = e.target.value

        this.setState((state) =>({
            form: {
                ...state.form,
                [nombre]: value
            }
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:1234/personas", {
            method: 'POST',
            body: JSON.stringify({
                nombre: this.state.form.nombre,
                apellido: this.state.form.apellido,
                direccion: this.state.form.direccion,
                telefonos: [this.state.form.telefono],
                localidad: this.state.form.localidad
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
                resultado: 'El estudiante fue creado con éxito'
            })
        })
    }

    componentDidMount() {
        fetch("http://localhost:1234/localidades")
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                localidades: json.localidades
            })
        })
    }

    render() {
        return (
            <div>
                <form>
                    <select name='localidad' onChange={this.handleChange}>
                        {this.state.localidades.map((loc) => (
                            <option value={loc.id}>{loc.localidad}</option>
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

                    <label>
                        Dirección
                    </label>
                    <input type='text' name='direccion' value={this.state.form.direccion} onChange={this.handleChange}/>

                    <label>
                        Teléfono
                    </label>
                    <input type='text' name='telefono' value={this.state.form.telefono} onChange={this.handleChange}/>

                    <button type='submit' onClick={this.handleSubmit}>Guardar</button>
                </form>
                <p>{this.state.resultado}</p>
            </div>
        )
    }
}
