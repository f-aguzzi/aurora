import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { PageProps, Pages } from '../types/types';

interface CustomHeaderProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
	setHistory: React.Dispatch<React.SetStateAction<Pages[]>>;
	history: Pages[];
}

export default function CustomHeader({ setCurrentPage, setHistory, history }: CustomHeaderProps) {

	const goBack = () => {
		const historyCopy = history;
		historyCopy.pop();
		const page = historyCopy.pop();

		if (page !== undefined) {
			historyCopy.push(page);
			setCurrentPage(page);
		} else {
			historyCopy.push(Pages.MainMenu);
			setCurrentPage(Pages.MainMenu);
		}

		setHistory(historyCopy);
	}

	return(
			<Header
			leftComponent={
				<TouchableOpacity 
					onPress={() => goBack()}
				>
					<Text style={{margin: 4, fontSize: 16}}>⬅️</Text>
				</TouchableOpacity>
			}
			centerComponent={{ text: 'AURORA', style: { color: '#fff', fontSize: 24 } }}
			rightComponent={
				<TouchableOpacity onPress={() => setCurrentPage(Pages.MainMenu)}>
					<Text style={{margin: 4, fontSize: 16}}>🏠</Text>
				</TouchableOpacity>
			}
			containerStyle={{
				backgroundColor: '#1F85DE',
			}}
		/>
	)
}