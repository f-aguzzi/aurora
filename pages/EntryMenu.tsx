import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../types/styles';
import { StatusBar } from 'expo-status-bar';
import { PageProps, Pages } from '../types/types';

export default function EntryMenu ({ setCurrentPage }: PageProps) {

	const [inputText, setInputText] = useState("");
	const [isWrong, setIsWrong] = useState(false);

	const authenticateUser = () => {
		if (inputText === "ARNIA")
			setCurrentPage(Pages.MainMenu);
		else
			setIsWrong(true);
	}

	const errorMessageText = () => {
		if (isWrong)
			return "Codice errato. Ritenta."
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Benvenuto!</Text>
			<StatusBar style="auto" />
			<TextInput 
				onChangeText={(e) => setInputText(e)}
				autoCorrect={false}
				secureTextEntry={true}
				style={styles.input}
				placeholder="Inserisci il codice..."
			/>
			<TouchableOpacity onPress={() => authenticateUser()} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Entra</Text>
			</TouchableOpacity>
			<Text style={styles.error}>{errorMessageText()}</Text>
		</View>
	)
}
