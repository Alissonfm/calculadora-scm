import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Cabecalho = () => {
	const styles = StyleSheet.create({
		topo: {
			backgroundColor: '#2196F3',
			padding: 10,
			alignItems: 'center'
		},
		txtTitulo: {
			fontSize: 25,
			color: '#FFF'
		}
	});

	return (
		<View style={styles.topo}>
			<Text style={styles.txtTitulo}>Calculadora 1.0</Text>
		</View>
	);
}

const Resultado = props => {

	const styles = StyleSheet.create({
		visor: {
			height: 100,
			fontSize: 30
		}
	});

	return (
		<View>
			<TextInput style={styles.visor}
				placeholder='Resultado'
				editable={false}
				value={props.resultado}
			/>
		</View>
	);

}

export { Cabecalho, Resultado };