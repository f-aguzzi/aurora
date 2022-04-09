import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../types/styles'
import { Hive, PageProps, Pages } from '../types/types'


function AddHives({ setCurrentPage, setHistory }: PageProps) {

    const [number, setNumber] = useState(0);
    const [date, setDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState("");

    const storeData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            // saving error
        }
    }

    const getData = async (key: string) => {
		try {
			const jsonValue = await AsyncStorage.getItem(key);
    		return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch(e) {
			// error reading value
		}
	}

    const insertHive = async () => {

        let condition = await getData("h" + number.toString());
        setErrorMessage(number.toString());

        if (Number.isNaN(number)) {
            setErrorMessage("Non è un numero");
            return;
        }

        if (condition === null) {
            let hive: Hive;
            hive = {
                'hive': number,
                'registerDate': date
            }

            let string = JSON.stringify(hive);
            storeData("h" + number.toString(), string);

            setHistory(history => [...history, Pages.HiveAddedCorrectly]);
            setCurrentPage(Pages.HiveAddedCorrectly);
            
        } else {
            setErrorMessage("Arnia già esistente");
        }
      
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Inserisci nuova arnia </Text>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.text}> Numero dell'arnia </Text>
                    <TextInput 
                        onChangeText={e => setNumber(parseInt(e))}
                        autoCorrect={false}
                        secureTextEntry={false}
                        style={styles.input}
                        placeholder="Inserisci il numero..."
			        />
                </View>
            </View>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.text}> Data d'inserimento </Text>
                    <TextInput 
                        onChangeText={e => setDate(new Date(e))}
                        autoCorrect={false}
                        secureTextEntry={false}
                        style={styles.input}
                        placeholder="Inserisci la data..."
			        />
                </View>
            </View>
            <TouchableOpacity onPress={() => insertHive()} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Inserisci</Text>
			</TouchableOpacity>
            <Text style={styles.error}> { errorMessage } </Text>
        </View>
    )
}

export default AddHives;