import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Persona from './Persona'
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import Estudiante from './Estudiante';
import CountClick from './CountClick';
import ListarPersonas from './ListarPersonas';
import ListarEstudiantes from './ListarEstudiantes';
import CrearPersona from './CrearPersona';
import Cursos from './Cursos';
import CrearEstudiante from './CrearEstudiante';


const root = ReactDOM.createRoot(document.getElementById('root'));

let persona1 = {
  	nombre: 'pepe',
  	apellido: 'roman'
}

let persona2 = {
  	nombre: 'Edgardo',
  	apellido: 'Pichiñan'
}

let estudiante = {
	dni: '36459875',
	apellido: 'Pichiñan',
	nombre: 'Edgardo',
	carrera: 'Licenciatura en Sistemas'
}

root.render(
  	/*<React.StrictMode>
    	<Persona persona = {persona1} />
    	<Persona persona = {persona2} />
  	</React.StrictMode>*/
	/*<React.StrictMode>
		<Estudiante datos={estudiante} />
	</React.StrictMode>*/
	/*<React.StrictMode>
		<ListarPersonas />
	</React.StrictMode>*/
	/*<React.StrictMode>
		<ListarEstudiantes />
	</React.StrictMode>*/
/*	<React.StrictMode>
		<CrearPersona />
	</React.StrictMode>*/
	<React.StrictMode>
	<CrearEstudiante />
</React.StrictMode>
	/*<React.StrictMode>
		<Cursos />
	</React.StrictMode>*/
	/*<React.StrictMode>
		<CountClick />
	</React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
