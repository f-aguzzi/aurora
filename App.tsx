import React, { useState } from 'react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Pages } from './types/types';
import CustomHeader from "./components/CustomHeader";
import EntryMenu from './pages/EntryMenu';
import MainMenu from './pages/MainMenu';
import Hives from './pages/Hives';
import AddHives from './pages/AddHives';
import AddTreatments from './pages/AddTreatments';
import TreatmentAddedCorrectly from './pages/TreatmentAddedCorrectly';
import HiveAddedCorrectly from './pages/HiveAddedCorrectly';
import ViewHives from './pages/ViewHives';
import ViewTreatments from './pages/ViewTreatments';
import Treatments from './pages/Treatments';


export default function App() {

  const [currentPage, setCurrentPage] = useState(Pages.EntryMenu);

  	if (currentPage === Pages.EntryMenu)
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<EntryMenu setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		);
  	else if (currentPage === Pages.MainMenu) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<MainMenu setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		);
  	} else if (currentPage === Pages.Hives) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<Hives setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.ViewHives) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<ViewHives setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.AddHives) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<AddHives setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.HiveAddedCorrectly) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<HiveAddedCorrectly setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.Treatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<Treatments setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.ViewTreatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<ViewTreatments setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
  	} else if (currentPage === Pages.AddTreatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<AddTreatments setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
  	} else if (currentPage === Pages.TreatmentAddedCorrectly) {
		return (
		<SafeAreaProvider>
			<CustomHeader setCurrentPage={setCurrentPage} />
			<TreatmentAddedCorrectly setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	}
}

