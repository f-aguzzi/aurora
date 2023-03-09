import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from '../types/styles';
import { PageProps, Pages, Treatment } from '../types/types';



function AddTreatments({ setCurrentPage, setHistory }: PageProps) {

    const [title, setTitle] = useState("");
    const [field, setField] = useState(0);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

    const [possibleHives, setPossibleFields] = useState<string[]>([]);

    const storeData = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            // saving error
        }
    }

    const getKeys = async () => {
        let keys: readonly string[];
        try {
            keys = await AsyncStorage.getAllKeys();
        } catch(e) {
            keys = [];
        }
        return keys;
    }

    const insertTreatment = () => {

        let treatment: Treatment;
        treatment = {
            'title': title,
            'field': field,
            'description': description,
            'registerDate': date
        }

        let string = JSON.stringify(treatment);
        storeData('t' + title + date.toDateString(), string);

        setHistory(history => [...history, Pages.TreatmentAddedCorrectly]);
        setCurrentPage(Pages.TreatmentAddedCorrectly);
    }

    const getFields = () => {
        getKeys().then(keys => {
            const fieldKeys = keys.filter(item => item[0] === 'h');
            const fieldNames = fieldKeys.map(item => item.substring(1));
            setPossibleFields(fieldNames);
        })
    }

    useEffect(() => {
        getFields();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Inserisci nuovo trattamento </Text>
            <View style={styles.inputView}>
                <Text style={styles.text}> Nome del trattamento </Text>
                <TextInput 
                    onChangeText={e => setTitle(e)}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci il titolo..."
                />
            </View >
            <ModalDropdown 
                options={possibleHives}
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownStyle}
                dropdownTextStyle={styles.dropdownText}
                defaultValue={"Seleziona..."}
                onSelect={(index, value) => setField(parseInt(value))}
            />
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
            <View style={styles.inputView}>
                <Text style={styles.text}> Descrizione </Text>
                <TextInput 
                    onChangeText={e => setDescription(e)}
                    autoCorrect={false}
                    secureTextEntry={false}
                    style={styles.input}
                    placeholder="Inserisci la descrizione..."
                />
            </View>
            <TouchableOpacity onPress={() => insertTreatment()} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Inserisci</Text>
			</TouchableOpacity>
        </View>
    )
}

export default AddTreatments;