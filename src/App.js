import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/Calendar';
import Formulaire from './components/Form';
import Activities from './components/Activities';
import { useState } from 'react';

function App() {

	const [pickedDate, setPickedDate] = useState('')
	const [active, setActive] = useState(false)
	const [activitiesList, setActivitiesList] = useState([])
	

	const handleClick = (prev) => {
		if(prev.target.localName === 'td') {
			setActive(true)
		}
		else if (prev.target.className === 'App')
		{setActive(false)}
	}


	for (let i=0; i< activitiesList.length; i++) {
		let doublon = 0

		activitiesList.forEach(element => {
			element?.date === pickedDate && doublon++
		})

		if (doublon > 1){
			activitiesList.pop()
		}
	}


  return (
    <div className="App" onClick={handleClick}>
		<h1>Calendar</h1>
		<Calendar setPickedDate={setPickedDate} active={active} setActive={setActive}/>
		<Formulaire pickedDate={pickedDate} active={active} setActive={setActive} setActivitiesList={setActivitiesList} activitiesList={activitiesList}/>
		<Activities activitiesList={activitiesList}/>
    </div>
  );
}

export default App;
