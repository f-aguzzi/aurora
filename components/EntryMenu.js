import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function EntryMenu () {
	return (
		<View style={styles.container}>
			<Text style={{fontSize: 30, fontWeight: 'bold'}}>Benvenuto!</Text>
			<StatusBar style="auto" />
			<TextInput style={{backgroundColor: 'gray', padding: '12px', margin: '5px', borderRadius: '6px'}}
				placeholder="Inserisci il codice..."
			/>
			<TouchableOpacity style={{backgroundColor: 'green', padding: '10px', margin: '5px', borderRadius: '6px'}}>
				<Text style={{fontSize: 24, color: 'white'}}>Entra</Text>
			</TouchableOpacity>
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