import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../types/styles";
import { Hive, Treatment } from "../types/types";

interface SingleHiveInterface {
    hive: Hive,
}

function SingleHive({ hive }: SingleHiveInterface) {

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
			const filteredResults = result
                .filter(item => (item.charAt(0) === 't'));
			setKeys(filteredResults);
		}).catch(e => {
			// error handlig
		})
	}, []);

    useEffect(() => {

		let treatments: Promise<Treatment>[] = [];
		keys.map(async (key) => {
			treatments.push(getData(key));
		});

		Promise.all(treatments).then(result => {

            const filteredResults = result.filter(item => item.hive === hive.hive);

			let elements: JSX.Element[] = [];
			filteredResults.map(async (treatment) => {
				elements.push(
					<View key={treatment.title + treatment.registerDate} style={styles.hiveView}>
						<Text style={styles.text}> Trattamento: {treatment.title} </Text>
						<Text style={styles.text}> Eseguito il: {treatment.registerDate} </Text>
                        <Text style={styles.text}> Descrizione: {treatment.description} </Text>
					</View>
				)
			})

			console.log(keys);

			setElements(elements);
		}).catch(e => {
			// error handling
		})	


	}, [keys]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Arnia {hive.hive} </Text>
            <Text style={styles.text}> Creata il {hive.registerDate.toString()} </Text>
            <View>
                <Text style={styles.text}> Trattamenti ricevuti: </Text>
                { 
                    (elements.length === 0)? (<Text>Nessun trattamento su quest'arnia. </Text>) : elements
                }
            </View>
        </View>
    )
}

export default SingleHive;