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
  const [history, setHistory] = useState<Pages[]>([]);

  	if (currentPage === Pages.EntryMenu)
		return (
		<SafeAreaProvider>
			<EntryMenu setHistory={setHistory} setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		);
  	else if (currentPage === Pages.MainMenu) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<MainMenu setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		);
  	} else if (currentPage === Pages.Hives) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<Hives setHistory={setHistory} setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.ViewHives || currentPage === Pages.SingleHive) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<ViewHives setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.AddHives) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<AddHives setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.HiveAddedCorrectly) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<HiveAddedCorrectly setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.Treatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<Treatments setHistory={setHistory} setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.ViewTreatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<ViewTreatments />
		</SafeAreaProvider>
		)
  	} else if (currentPage === Pages.AddTreatments) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<AddTreatments setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
  	} else if (currentPage === Pages.TreatmentAddedCorrectly) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<TreatmentAddedCorrectly setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	}
}

