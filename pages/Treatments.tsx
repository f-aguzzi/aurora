import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function Treatments({ setCurrentPage }: PageProps) {


    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Trattamenti </Text>
            <View>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.AddTreatments)} style={styles.button}>
                    <Text style={styles.text}> Aggiungi nuovo trattamento </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.ViewTreatments)} style={styles.button}>
                    <Text style={styles.text}> Visualizza trattamenti </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

export default Treatments;