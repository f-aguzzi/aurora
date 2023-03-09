import React, { JSXElementConstructor, ReactChild, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../types/styles";
import { Field, Pages } from "../types/types";
import SingleHive from "./SingleField";

interface ViewFieldsProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function ViewHives({ setCurrentPage }: ViewFieldsProps) {

	const [keys, setKeys] = useState<readonly string[]>([]);
	const [elements, setElements] = useState<JSX.Element[]>([]);
	const [singleField, setSingleField] = useState(0);
	const [selectedField, setSelectedField] = useState<Field>({
		field: 0,
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

		let hives: Promise<Field>[] = [];
		keys.map(async (key) => {
			hives.push(getData(key));
		});

		Promise.all(hives).then(result => {

			let elements: JSX.Element[] = [];
			result.map(async (field) => {
				elements.push(
					<TouchableOpacity key={field.field} onPress={() => setSingleField(field.field)} style={styles.fieldView}>
						<Text style={styles.text}> Arnia {field.field.toString()} </Text>
						<Text style={styles.text}> Costruita il {field.registerDate} </Text>
					</TouchableOpacity>
				)
			})

			setElements(elements);
		}).catch(e => {
			// error handling
		})	


	}, [keys]);

	const getSelectedField = () => {
		getData('h' + singleField).then(result => {
			setSelectedField(result);
		});
	}

	if (singleField === 0) {
		return (
			<View style={styles.container} >
				<Text style={styles.heading}> Lista Arnie </Text>
				<ScrollView>
				{ elements }
				</ScrollView>
			</View>
		)	
	} else {

		getSelectedField();

		return (
			<SingleHive field={selectedField} />
		)
	}
    
}

export default ViewHives;