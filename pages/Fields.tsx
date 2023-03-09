import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function Hives({ setCurrentPage, setHistory }: PageProps) {

    const viewFields = () => {
        setHistory(history => [...history, Pages.ViewFields]);
        setCurrentPage(Pages.ViewFields)
    }

    const addFields = () => {
        setHistory(history => [...history, Pages.AddFields]);
        setCurrentPage(Pages.AddFields);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Arnie </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => viewFields()} >
                    <Text style={styles.text}> Visualizza campi </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addFields()} >
                    <Text style={styles.text}> Aggiungi campo </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Hives;