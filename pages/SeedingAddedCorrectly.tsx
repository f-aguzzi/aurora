import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";



function SeedingAddedCorrectly({ setCurrentPage, setHistory }: PageProps) {

    const toAddSeedings = () => {
        setHistory(history => [...history, Pages.AddSeedings]);
        setCurrentPage(Pages.AddSeedings);
    }

    const toMainMenu = () => {
        setHistory(history => [...history, Pages.MainMenu]);
        setCurrentPage(Pages.MainMenu);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Semina inserita correttamente. </Text>
            <View>
                <TouchableOpacity onPress={() => toAddSeedings()} style={styles.button} >
                    <Text style={styles.text}> Inserisci un'altra semina </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toMainMenu()} style={styles.button} >
                    <Text style={styles.text}> Torna al menu principale </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SeedingAddedCorrectly;