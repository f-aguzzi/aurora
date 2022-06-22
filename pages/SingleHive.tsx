import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../types/styles";
import { Hive, Treatment, Pages } from "../types/types";
import Modal from "react-native-modal";

interface SingleHiveInterface {
    hive: Hive,
}

function SingleHive({ hive }: SingleHiveInterface) {

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

			setElements(elements);
		}).catch(e => {
			// error handling
		})	


	}, [keys]);

	const deleteHive = () => {
		return (
			<Modal isVisible={isModalVisible}>
				<View style={{ flex: 1 }}>
					<Text> Elimina alveare? </Text>
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
            <Text style={styles.heading}>Arnia {hive.hive} </Text>
            <Text style={styles.text}> Creata il {hive.registerDate.toString()} </Text>
            <View>
                <Text style={styles.text}> Trattamenti ricevuti: </Text>
                { 
                    (elements.length === 0)? (<Text>Nessun trattamento su quest'arnia. </Text>) : elements
                }
				<TouchableOpacity onPress={() => handleModal()} style={styles.confirmButton}>
					<Text style={styles.text}> Elimina alveare </Text>
				</TouchableOpacity>
				{ deleteHive }
            </View>
        </View>
    )
}

export default SingleHive;