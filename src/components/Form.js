import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Formulaire = (props) => {
	// console.log(props)

	const Submit = (e) => {
		e.preventDefault()
		// console.log(props.activitiesList)

		if(e.target[0].value === '') {
			return
			
		}
		else {
			// console.log('ici')
			props.setActivitiesList([
				...props.activitiesList,
				{
					date: props.pickedDate,
					value: e.target[0].value
				}
			])
		}

	}
	return (
		<FormContainer className="container w-50 mt-3 p-3 border border-success rounded" active={props.active}>		
			<h2>Ajouter un événement</h2>
			<Form onSubmit={Submit}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Date: {props.pickedDate}</Form.Label>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Activité</Form.Label>
					<Form.Control as="textarea" rows={3} />
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
	display: ${({active}) => active ? 'grid' : 'none'}
`
