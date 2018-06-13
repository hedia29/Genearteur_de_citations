//importer react
import React from 'react';
//importer que render de react dom
import { render }from 'react-dom';
//importer CSS
import './index.css';
//importer ciation
import citations from './citations';
//creer un component
class App extends React.Component {

	//creer le state (stocker toutes les donnes realtives a notre component)
	state = {};

	//juste avent que le componenet soit monter
	componentWillMount(){
		this.genererCitaion()
	}
	//creer la fonction generer citaion 
	genererCitaion = event => {
		//on transforme les citaio en arry
		//tu recupere toutes le cles et tu nous fait un tableau
		const keyArray = Object.keys(citations);
		//Une citation au hasard
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
		if (this.state.citation === citations[randomKey].citation ){
			this.genererCitaion();
			return;
		}
		this.setState(citations[randomKey]);

	}
	//faire le rendu 
	render () {
		return (
			<div>
				<p>
					{this.state.citation}
					<span>{this.state.auteur}</span>
				</p>
				<button onClick={e => this.genererCitaion(e)}>Une autre citation</button>
			</div>
			)
	}

		
}
//pour faire un rendu on utilise react dom 
render(
	//on va appeler le componenet APP
	<App />,
	//on va aler le chercher dans le document html 
	document.getElementById('root')

	);