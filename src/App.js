import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/Calendar';
import Formulaire from './components/Form';
import Activities from './components/Activities';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

	const [pickedDate, setPickedDate] = useState('')
	const [active, setActive] = useState(false)
	const [activitiesList, setActivitiesList] = useState([])
	const [userValue, setUserValue] = useState('')
	const [idToDelete, setIdToDelete] = useState('')
	const [changingValue, setChangingValue] = useState(false)

	

	

	const handleClick = (prev) => {
		if(prev.target.className === 'calendarTd') {
			setActive(true)
		}
		else if (prev.target.className === 'App'){
			setActive(false)
			setChangingValue(false)
		}
		
		if (prev.target.className === 'calendar'){
			setChangingValue(false)
		}
		
	}


	for (let i=0; i< activitiesList.length; i++) {
		let doublon = 0

		activitiesList.forEach(element => {
			element?.date === pickedDate && doublon++
		})

		if (doublon > 1){
			alert('Un évenement est deja crée a cette date, veuillez le supprimer si vous voulez en créer un nouveau')
			activitiesList.pop()
		}
	}

	useEffect(()=>{
		console.log('test')
		
		let saved = localStorage.getItem('List')
		let locals = JSON.parse(saved)
		console.log(locals)

		localStorage.setItem('List', JSON.stringify(activitiesList))
	}, [activitiesList])

  return (
    <div className="App" onClick={handleClick}>
		<div className="bg"></div>
		<div className="container appContainer">
			<h1>Calendar</h1>
			<ContentWrapper>
				<Wrapper>
					<Calendar setPickedDate={setPickedDate} 
						active={active} 
						setActive={setActive}
						changingValue={changingValue}
						setChangingValue={setChangingValue}
					/>
					<Formulaire pickedDate={pickedDate} 
						active={active} 
						setActive={setActive} 
						setActivitiesList={setActivitiesList} 
						activitiesList={activitiesList}
						userValue={userValue}
						setUserValue={setUserValue}
						setPickedDate={setPickedDate}
						changingValue={changingValue}
						setChangingValue={setChangingValue}
					/>
				</Wrapper>
				<Activities activitiesList={activitiesList} 
					setIdToDelete={setIdToDelete}
					idToDelete={idToDelete}	
					setActivitiesList={setActivitiesList}
					changingValue={changingValue}
					setChangingValue={setChangingValue}
				/>
			</ContentWrapper>
		</div>
    </div>
  );
}

export default App;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px){
		grid-template-columns: 1fr;
	}
`

const Wrapper = styled.div`
	display: flex;
`
