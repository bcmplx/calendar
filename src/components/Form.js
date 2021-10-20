import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components/macro'

const Formulaire = (props) => {

	

	const handleChange = (e) => {
		props.setUserValue(e.target.value)
		props.setChangingValue(false)
	}

	const Submit = (e) => {
		e.preventDefault()
		props.setChangingValue(false)
		if(e.target[0].value === '') {
			return
			
		}
		else {
			props.setActivitiesList([
				...props.activitiesList,
				{
					date: props.pickedDate,
					value: e.target[0].value,
					id: props.activitiesList.length
				}
			])
			props.setUserValue('')
			// props.setPickedDate('- - -')
		}
		props.setActive(false)
	}
	return (
		<FormContainer className="container w-75 mt-3 p-3 border border-success rounded activities" active={props.active}>		
			<h2>Ajouter un événement</h2>
			<Form onSubmit={Submit}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Date: {props.pickedDate}</Form.Label>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Activité</Form.Label>
					<Form.Control as="textarea" rows={3} value={props.userValue} onChange={handleChange} required/>
				</Form.Group>
				<Button variant="success" type="submit">
					Submit
				</Button>
			</Form>
			
		</FormContainer>
	)
}

export default Formulaire

const FormContainer = styled.div`
	visibility: ${({active}) => active ? 'visible' : 'hidden'};
	display: grid;
	background: rgba(0,0,0,0.5);

	@media screen and (max-width:768px){
		visibility: visible;
		display: ${({active}) => active ? 'flex' : 'none'};
		flex-direction: column;
		position: absolute;
		margin: auto; 
		width: 97vw !important;
		height: 80vh;
		top: 0;
		bottom: 0 ;
		right: 0;
		left: 0;
		background: rgba(0,0,0,0.95);
	}

`
