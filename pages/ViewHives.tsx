import React, { JSXElementConstructor, ReactChild, useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../types/styles";
import { Hive, Pages } from "../types/types";

interface ViewHivesProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function ViewHives({ setCurrentPage }: ViewHivesProps) {

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
			setKeys(result);
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
					<View style={styles.hiveView}>
						<Text style={styles.text}> Arnia {hive.hive.toString()} </Text>
						<Text style={styles.text}> Costruita il {hive.registerDate} </Text>
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
            <Text style={styles.heading}> Lista Arnie </Text>
	
            { elements }
        </View>
    )
}

export default ViewHives;