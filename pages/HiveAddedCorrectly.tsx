import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function HiveAddedCorrectly({ setCurrentPage, setHistory }: PageProps) {

	const anotherHive = () => {
		setHistory(history => [...history, Pages.AddHives]);
		setCurrentPage(Pages.AddHives);
	}

	const toMenu = () => {
		setHistory(history => [...history, Pages.MainMenu]);
		setCurrentPage(Pages.MainMenu);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}> Arnia inserita correttamente. </Text>
			<View>
				<TouchableOpacity onPress={() => anotherHive()} style={styles.button} >
					<Text style={styles.text}> Inserisci un'altra arnia </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => toMenu()} style={styles.button} >
					<Text style={styles.text}> Torna al menu principale </Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HiveAddedCorrectly;