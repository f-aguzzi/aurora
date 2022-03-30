import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function EntryMenu ({ setLoading }) {

	const [inputText, setInputText] = useState("");
	const [isWrong, setIsWrong] = useState(false);

	const authenticateUser = () => {
		if (inputText === "ARNIA")
			setLoading(false);
		else
			setIsWrong(true);
	}

	const errorMessageText = () => {
		if (isWrong)
			return "Codice errato. Ritenta."
	}

	return (
		<View style={styles.container}>
			<Text style={{fontSize: 30, fontWeight: 'bold'}}>Benvenuto!</Text>
			<StatusBar style="auto" />
			<TextInput 
				onChangeText={(e) => setInputText(e)}
				autoCorrect={false}
				secureTextEntry={true}
				style={{backgroundColor: 'gray', padding: '12px', margin: '5px', borderRadius: '6px'}}
				placeholder="Inserisci il codice..."
			/>
			<TouchableOpacity onPress={() => authenticateUser()} style={{backgroundColor: 'green', padding: '10px', margin: '5px', borderRadius: '6px'}}>
				<Text style={{fontSize: 24, color: 'white'}}>Entra</Text>
			</TouchableOpacity>
			<Text style={{fontSize: 12, color: 'red', fontSize: 20}}>{errorMessageText()}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });