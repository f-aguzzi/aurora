import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface EntryMenuProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EntryMenu ({ setLoading }: EntryMenuProps) {

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
				style={{backgroundColor: 'gray', padding: '12px', margin: '5px', borderRadius: 3}}
				placeholder="Inserisci il codice..."
			/>
			<TouchableOpacity onPress={() => authenticateUser()} style={{backgroundColor: 'green', padding: '10px', margin: '5px', borderRadius: 3}}>
				<Text style={{fontSize: 24, color: 'white'}}>Entra</Text>
			</TouchableOpacity>
			<Text style={{fontSize: 20, color: 'red'}}>{errorMessageText()}</Text>
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