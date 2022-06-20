import React, { JSXElementConstructor, ReactChild, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../types/styles";
import { Hive, Pages } from "../types/types";
import SingleHive from "./SingleHive";
import HiveAddedCorrectly from "./HiveAddedCorrectly";

interface ViewHivesProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function ViewHives({ setCurrentPage }: ViewHivesProps) {

	const [keys, setKeys] = useState<readonly string[]>([]);
	const [elements, setElements] = useState<JSX.Element[]>([]);
	const [singleHive, setSingleHive] = useState(0);
	const [selectedHive, setSelectedHive] = useState<Hive>({
		hive: 0,
		registerDate: new Date(),
	});

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
			const filteredResults = result.filter(item => (item.charAt(0) === 'h'));
			setKeys(filteredResults);
		}).catch(e => {
			// error handlig
		})
	}, []);

	useEffect(() => {

		let hives: Promise<Hive>[] = [];
		keys.map(async (key) => {
			hives.push(getData(key));
		});

		Promise.all(hives).then(result => {

			let elements: JSX.Element[] = [];
			result.map(async (hive) => {
				elements.push(
					<TouchableOpacity key={hive.hive} onPress={() => setSingleHive(hive.hive)} style={styles.hiveView}>
						<Text style={styles.text}> Arnia {hive.hive.toString()} </Text>
						<Text style={styles.text}> Costruita il {hive.registerDate} </Text>
					</TouchableOpacity>
				)
			})

			setElements(elements);
		}).catch(e => {
			// error handling
		})	


	}, [keys]);

	const getSelectedHive = () => {
		getData('h' + singleHive).then(result => {
			setSelectedHive(result);
		});
	}

	if (singleHive === 0) {
		return (
			<View style={styles.container} >
				<Text style={styles.heading}> Lista Arnie </Text>
				<ScrollView>
				{ elements }
				</ScrollView>
			</View>
		)	
	} else {

		getSelectedHive();

		return (
			<SingleHive hive={selectedHive} />
		)
	}
    
}

export default ViewHives;