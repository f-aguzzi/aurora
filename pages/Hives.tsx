import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function Hives({ setCurrentPage, setHistory }: PageProps) {

    const viewHives = () => {
        setHistory(history => [...history, Pages.ViewHives]);
        setCurrentPage(Pages.ViewHives)
    }

    const addHives = () => {
        setHistory(history => [...history, Pages.AddHives]);
        setCurrentPage(Pages.AddHives);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Arnie </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => viewHives()} >
                    <Text style={styles.text}> Visualizza arnie </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addHives()} >
                    <Text style={styles.text}> Aggiungi arnia </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Hives;