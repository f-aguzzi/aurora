import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { PageProps, Pages } from "../types/types";
import { styles } from "../types/styles";


export default function MainMenu({ setCurrentPage, setHistory }: PageProps) {

    const toHives = () => {
        setHistory(history => [...history, Pages.Hives]);
        setCurrentPage(Pages.Hives);
    }

    const toTreatments = () => {
        setHistory(history => [...history, Pages.Treatments]);
        setCurrentPage(Pages.Treatments);
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Menu principale</Text>
            <View>
                <TouchableOpacity onPress={() => toHives()} style={styles.button} >
                    <Text style={styles.text}> Arnie </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toTreatments()} style={styles.button}>
                    <Text style={styles.text}> Trattamenti </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
