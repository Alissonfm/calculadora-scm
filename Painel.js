import React from 'react';
import { Button, Picker, View, StyleSheet, TextInput  } from 'react-native';


const Numero = props => {

	const styles = StyleSheet.create({
		numero: {
			width: 140,
			height: 80,
			fontSize: 20,
			backgroundColor: '#fbfbfb'
		}
	});

	return (
		<TextInput 
			style={styles.numero} 
			value={props.num} 
			onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
		/>
	);
}

const Operacao = ({operacao, atualizaOperacao}) => {

	const styles = StyleSheet.create({
		operacao: {
			marginTop: 15,
			marginBottom: 15
		}
	});

	return (
		<Picker 
			style={styles.operacao}
			selectedValue={operacao}
			onValueChange={op => atualizaOperacao(op)}
		>
			<Picker.Item label='Soma' value='soma' />
			<Picker.Item label='Subtração' value='subtracao' />
			<Picker.Item label='Multiplicação' value='multiplicacao' />
			<Picker.Item label='Divisão' value='divisao' />
			<Picker.Item label='Exponenciação' value='exponenciacao' />
		</Picker>
	);
}

const Entrada = props => {
	const styles = StyleSheet.create({
		numeros: {
			flexDirection: 'row',
			justifyContent: 'space-between'
		}
	});

	return (
		<View style={styles.numeros}>
			<Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
			<Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
		</View>
	);
}

const Comando = ({acao}) => <Button title="Calcular" onPress={acao} />;

const Painel = props => (
	<View>
		<Entrada 
			num1={props.num1} 
			num2={props.num2} 
			atualizaValor={props.atualizaValor}
		/>
		<Operacao 
			operacao={props.operacao} 
			atualizaOperacao={props.atualizaOperacao} 
		/>
		<Comando acao={props.calcular} />
	</View>
);

export default Painel;