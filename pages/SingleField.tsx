import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../types/styles";
import { Field, Treatment, Pages } from "../types/types";
import Modal from "react-native-modal";

interface SingleFieldInterface {
    field: Field,
}

function SingleField({ field }: SingleFieldInterface) {

    const [keys, setKeys] = useState<readonly string[]>([]);
	const [elements, setElements] = useState<JSX.Element[]>([]);
	const [isModalVisible, setIsModalVisible] = useState<boolean>();

    const getData = async (key: string) => {
		try {
			const jsonValue = await AsyncStorage.getItem(key);
    		return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch(e) {
			// error reading value
		}
	}

	const handleModal = () => {
		setIsModalVisible(modal => !modal);
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

            const filteredResults = result.filter(item => item.field === field.field);

			let elements: JSX.Element[] = [];
			filteredResults.map(async (treatment) => {
				elements.push(
					<View key={treatment.title + treatment.registerDate} style={styles.fieldView}>
						<Text style={styles.text}> Trattamento: {treatment.title} </Text>
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

	const deleteField = () => {
		return (
			<Modal isVisible={isModalVisible}>
				<View style={{ flex: 1 }}>
					<Text> Elimina campo? </Text>
					<TouchableOpacity  onPress={() => handleModal()} style={styles.confirmButton} >
						<Text style={styles.text}> Elimina </Text>
					</TouchableOpacity>
					<TouchableOpacity  onPress={() => handleModal()} style={styles.confirmButton} >
						<Text style={styles.text}> Annulla </Text>
					</TouchableOpacity>
				</View>
			</Modal>
		)
	}

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Campo {field.field} </Text>
            <Text style={styles.text}> Creato il {field.registerDate.toString()} </Text>
            <View>
                <Text style={styles.text}> Trattamenti ricevuti: </Text>
                { 
                    (elements.length === 0)? (<Text>Nessun trattamento su questo campo. </Text>) : elements
                }
				<TouchableOpacity onPress={() => handleModal()} style={styles.confirmButton}>
					<Text style={styles.text}> Elimina campo </Text>
				</TouchableOpacity>
				{ deleteField }
            </View>
        </View>
    )
}

export default SingleField;