import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function Seedings({ setCurrentPage, setHistory }: PageProps) {

    const viewSeedings = () => {
        setHistory(history => [...history, Pages.ViewSeedings]);
        setCurrentPage(Pages.ViewSeedings)
    }

    const addSeedings = () => {
        setHistory(history => [...history, Pages.AddSeedings]);
        setCurrentPage(Pages.AddSeedings);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Semine </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => viewSeedings()} >
                    <Text style={styles.text}> Visualizza semine </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addSeedings()} >
                    <Text style={styles.text}> Aggiungi semina </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Seedings;