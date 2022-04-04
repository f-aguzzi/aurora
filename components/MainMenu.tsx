import { TouchableOpacity, Text, View, StyleSheet } from "react-native";


export default function MainMenu () {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, color: 'black', margin: '30px', fontWeight: 'bold'}}>Menu principale</Text>
            <TouchableOpacity style={{backgroundColor: 'yellow', margin: '5px', padding: '5px', borderRadius: 3}}>
                <Text style={{fontSize: 24}}>Arnie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'yellow', margin: '5px', padding: '5px', borderRadius: 3}}>
                <Text style={{fontSize: 24}}>Trattamenti</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });