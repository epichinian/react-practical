
import React, { Component } from 'react'
import './Estudiante.css'
import { Table, Card, Button } from 'antd';

const columns = [
    {
      title: 'Curso',
      dataIndex: 'curso',
      key: 'curso',
    },
    {
      title: 'Cant. Hs',
      dataIndex: 'cantHs',
      key: 'cantHs',
    },
];

const cursosRandom = [
    {curso: 'Angular', cantHs: 15},
    {curso: 'Vue JS', cantHs: 28},
    {curso: 'Flutter', cantHs: 25},
    {curso: 'Java', cantHs: 40},
]

export default class Estudiante extends Component {

    constructor(props){
        super(props)
        this.state = {
            cursos: [
                {curso: 'React JS', cantHs: 20},
            ]
        }
        this.handleClick = this.handleClick.bind(this)
        this.variable = 'Esto es importante'
    }

    handleClick(e) {
        e.preventDefault();
        let cursoRandom = cursosRandom[Math.floor(Math.random()*cursosRandom.length)];
        this.setState((state) => ({cursos: [cursoRandom, ...state.cursos]}));
        console.log('click .. ' + this.variable)
    }

    render() {
        return (
            <>
                <Card className='cardEstudiante'>
                    <h2>Datos del Estudiante</h2>
                    <p>{"DNI: "+this.props.datos.dni}</p>
                    <p>{"APELLIDO: "+this.props.datos.apellido}</p>
                    <p>{"NOMBRE: "+this.props.datos.nombre}</p>
                    <p>{"CARRERA: "+this.props.datos.carrera}</p>
                </Card>
                <div className='table'>
                    <Table
                        dataSource={this.state.cursos}
                        columns={columns}
                        pagination={{
                            showSizeChanger: true,
                            pageSizeOptions: ['5', '10'],
                            defaultPageSize: 5,
                            hideOnSinglePage: true
                        }}
                    />
                    <Button type="primary" block onClick={this.handleClick}>
                        Inscribirme
                    </Button>
                </div>
            </>
        )
    }
}
