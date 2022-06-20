import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../types/styles'
import { Hive, Pages } from '../types/types'

interface RemoveHiveInterface {
    hive: Hive,
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
    setHistory: React.Dispatch<React.SetStateAction<Pages[]>>;
}

function RemoveHive({ hive, setCurrentPage, setHistory }: RemoveHiveInterface) {

    
    const removeData = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            // saving error
        }

        setHistory(history => [...history, Pages.RemoveHive]);
        setCurrentPage(Pages.Hives);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Rimuovi arnia </Text>
            <Text style={styles.text}> Sicuro di voler rimuovere l'arnia { hive.hive }? </Text>
            <TouchableOpacity onPress={() => removeData('h' + hive.hive)} style={styles.confirmButton}>
				<Text style={{fontSize: 24, color: 'white'}}>Rimuovi</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RemoveHive;