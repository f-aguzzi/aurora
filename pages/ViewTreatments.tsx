import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../types/styles";
import { Treatment } from "../types/types";


function ViewTreatments() {

	const [keys, setKeys] = useState<readonly string[]>([]);
	const [elements, setElements] = useState<JSX.Element[]>([]);

    const getData = async (key: string) => {
		try {
			const jsonValue = await AsyncStorage.getItem(key);
    		return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch(e) {
			// error reading value
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

	useEffect(() => {

		getKeys().then(result => {
			const filteredResults = result.filter(item => (item.charAt(0) === 't'));
			setKeys(filteredResults);
		}).catch(e => {
			// error handlig
		})
	}, []);

	useEffect(() => {

		let hives: Promise<Treatment>[] = [];
		keys.map(async (key) => {
			hives.push(getData(key));
		});

		Promise.all(hives).then(result => {

			let elements: JSX.Element[] = [];
			result.map(async (treatment) => {
				elements.push(
					<View key={treatment.title + treatment.registerDate} style={styles.hiveView}>
						<Text style={styles.text}> Trattamento: {treatment.title} </Text>
                        <Text style={styles.text}> Sull'arnia: {treatment.hive} </Text>
						<Text style={styles.text}> Eseguito il: {treatment.registerDate} </Text>
                        <Text style={styles.text}> Descrizione: {treatment.description} </Text>
					</View>
				)
			})

			setElements(elements);
		}).catch(e => {
			// error handling
		})	


	}, [keys]);

    return (
        <View style={styles.container} >
            <Text style={styles.heading}> Lista Trattamenti </Text>
			<ScrollView>
			{ elements }
			</ScrollView>
        </View>
    )
}

export default ViewTreatments;