import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';

// class WhoImI extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 20
// 		}
// 		this.nextYear = this.nextYear.bind(this);  //Привязка контекста вызова
// 		// this.nextYear = () => {						//Запись метода в конструктор для сохранения контекста вызова при помощи стрелочной функции
// 		// 	console.log('ok');
// 		// 	this.setState(state => ({
// 		// 	years: ++state.years
// 		// }))
// 		// }
// 	}

// 	// nextYear = () => {							//Использование тестовой функции (вынос метода в стрелочную функцию, есть возможность не использовать конструктор)
// 	// 	console.log('ok');
// 	// 	this.setState(state => ({
// 	// 		years: ++state.years
// 	// 	}))
// 	// }
// 	nextYear() {
// 		console.log('ok');
// 		this.setState(state => ({
// 			years: ++state.years
// 		}))
// 	}
// 	render() {
// 		return (
// 			<>
// 				<button onClick={this.nextYear}>PLUS YEARS</button>
// 				<h1>My name is {this.props.name}, my surname is {this.props.surname}, i am {this.state.years} years old</h1>
// 				<a href={this.props.link}></a>
// 			</>
// 		)
// 	}
// }
// const App = () => {
// 	return (
// 		<>
// 			<WhoImI name="Ksenia" surname="Fomenko" link="vk.com"/>
// 			<WhoImI name="Sasha" surname="Ivanov" link="vk.com"/>
// 			<WhoImI name="Dasha" surname="Petrova" link="vk.com"/>
// 		</>
// 	)
// }
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
