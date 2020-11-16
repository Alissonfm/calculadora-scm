
import React from 'react';
import { View } from 'react-native';

import { Cabecalho, Resultado } from './Topo';
import Painel from './Painel';

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
	}

	calcular() {
		let resultado = 0;

		const {num1, num2} = this.state;

		const expOper = (value, times) =>  times <= 1 ? 1 : value * expOper(value, (times -1));
		
		switch (this.state.operacao) {
			case 'soma':
				resultado = parseFloat(num1) + parseFloat(num2);
				break;

			case 'subtracao':
				resultado = parseFloat(num1) - parseFloat(num2);
				break;

			case 'divisao':
				resultado = parseFloat(num1) / parseFloat(num2);
				break;

			case 'multiplicacao':
				resultado = parseFloat(num1) * parseFloat(num2);
				break;

			case 'exponenciacao':
				resultado = num1 * expOper(num1, num2);
				break;

			default:
				resultado = 0;
		}

		this.setState({ resultado: resultado.toString() })
	}

	atualizaOperacao(operacao) {
		this.setState({ operacao });
	}

	atualizaValor(nomeCampo, numero) {
		const obj = {};
		obj[nomeCampo] = numero;

		this.setState(obj);
	}

	render() {
		return (
		<View>
			<Cabecalho />
			<Resultado resultado={this.state.resultado} />
			<Painel 
				num1={this.state.num1}
				num2={this.state.num2}
				operacao={this.state.operacao}
				calcular={this.calcular}
				atualizaOperacao={this.atualizaOperacao}
				atualizaValor={this.atualizaValor}
			/>
		</View>
		);
	}
};