import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../types/styles'
import { Pages, Treatment } from '../types/types'

interface AddTreatmentsInterface {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function AddTreatments({ setCurrentPage }: AddTreatmentsInterface) {

    const [title, setTitle] = useState("");
    const [hive, setHive] = useState(0);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

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

    const insertHive = () => {

        let treatment: Treatment;
        treatment = {
            'title': title,
            'hive': hive,
            'description': description,
            'registerDate': date
        }

        let string = JSON.stringify(treatment);
        storeData('t' + title + date.toDateString(), string);

        setCurrentPage(Pages.TreatmentAddedCorrectly);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Inserisci nuovo trattamento </Text>
            <View>
                <Text>Nome del trattamento</Text>
                <TextInput 
                    onChangeText={e => setTitle(e)}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci il numero..."
                />
            </View>
            <View>
                <Text>Numero dell'arnia</Text>
                <TextInput 
                    onChangeText={e => setHive(parseInt(e))}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci il numero..."
                />
            </View>
            <View>
                <Text>Data d'inserimento</Text>
                <TextInput 
                    onChangeText={e => setDate(new Date(e))}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci la data..."
                />
            </View>
            <View>
                <Text>Descrizione</Text>
                <TextInput 
                    onChangeText={e => setDescription(e)}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci il numero..."
                />
            </View>
            <TouchableOpacity onPress={() => insertHive()} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Inserisci</Text>
			</TouchableOpacity>
        </View>
    )
}

export default AddTreatments;