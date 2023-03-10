import React, { useState } from 'react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Pages } from './types/types';
import CustomHeader from "./components/CustomHeader";
import EntryMenu from './pages/EntryMenu';
import MainMenu from './pages/MainMenu';
import Hives from './pages/Fields';
import AddHives from './pages/AddFields';
import AddTreatments from './pages/AddTreatments';
import TreatmentAddedCorrectly from './pages/TreatmentAddedCorrectly';
import HiveAddedCorrectly from './pages/FieldAddedCorrectly';
import ViewFields from './pages/ViewFields';
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
  	} else if (currentPage === Pages.Fields) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<Hives setHistory={setHistory} setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.ViewFields || currentPage === Pages.SingleField) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<ViewFields setCurrentPage={setCurrentPage} />
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.AddFields) {
		return (
		<SafeAreaProvider>
			<CustomHeader history={history} setHistory={setHistory} setCurrentPage={setCurrentPage} />
			<AddHives setHistory={setHistory} setCurrentPage={setCurrentPage}/>
		</SafeAreaProvider>
		)
	} else if (currentPage === Pages.FieldAddedCorrectly) {
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

