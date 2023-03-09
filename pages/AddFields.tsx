import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../types/styles'
import { Field, PageProps, Pages } from '../types/types'


function AddFields({ setCurrentPage, setHistory }: PageProps) {

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

    const insertField = async () => {

        let condition = await getData("h" + number.toString());
        setErrorMessage(number.toString());

        if (Number.isNaN(number)) {
            setErrorMessage("Non è un numero");
            return;
        }

        if (condition === null) {
            let field: Field;
            field = {
                'field': number,
                'registerDate': date
            }

            let string = JSON.stringify(field);
            storeData("h" + number.toString(), string);

            setHistory(history => [...history, Pages.FieldAddedCorrectly]);
            setCurrentPage(Pages.FieldAddedCorrectly);
            
        } else {
            setErrorMessage("Campo già esistente");
        }
      
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Inserisci nuovo campo </Text>
            <View>
                <View style={styles.inputView}>
                    <Text style={styles.text}> Numero del campo </Text>
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
            <TouchableOpacity onPress={() => insertField()} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Inserisci</Text>
			</TouchableOpacity>
            <Text style={styles.error}> { errorMessage } </Text>
        </View>
    )
}

export default AddFields;