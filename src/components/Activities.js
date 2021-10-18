import React from 'react'
import Table from 'react-bootstrap/Table'

const Activities = (props) => {

	// console.log('inside activites: ',props.activitiesList)

	return (
		<div className="container mt-3 p-3">
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
					<th>#</th>
					<th>Date</th>
					<th>Activité</th>
					</tr>
				</thead>
				<tbody>
				  {props.activitiesList.map((element, i) => {
					  return <tr key={i}>
					  <td>{i+1}</td>
					  <td>{element.date}</td>
					  <td>{element.value}</td>
				  	</tr>
				  })}
				</tbody>
			</Table>
		</div>
	)
}

export default Activities
