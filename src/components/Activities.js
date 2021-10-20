import React from 'react'
import Table from 'react-bootstrap/Table'
import {BsPen} from 'react-icons/bs'
import {RiDeleteBinLine} from 'react-icons/ri'
import {MdGppGood} from 'react-icons/md'

const Activities = (props) => {

	const deleteRow = (event) => {
		props.setIdToDelete(event.target?.parentNode?.parentNode?.id)
		props.activitiesList.splice(props.idToDelete, 1)
		props.setActivitiesList([...props.activitiesList])
		props.setIdToDelete('')
	}

	const changeRow = (event) => {
		props.setChangingValue(true)
		props.setIdToDelete(event.target?.parentNode?.parentNode?.id)

	}

	const validateRow = (event) => {
		for (let i=0; i<props.activitiesList.length; i++) {
			if (props.activitiesList[i].id === Number(event.target?.parentNode?.parentNode?.id)){
				console.log('ici')
				props.activitiesList[i].value = event.target?.parentNode?.children[0].value				
			}
		}
		props.setChangingValue(false)
	}

	 

	return (
		<div className="container mt-3 p-3 rounded activities">
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
					<th>#</th>
					<th>Date</th>
					<th>Activités</th>
					</tr>
				</thead>
				<tbody>
				  {props.activitiesList.map((element, i) => {
					  return <tr key={i} id={element.id}>
						<td>{i+1}</td>
						<td>{element.date}</td>
						<td className="userActs">
							{props.changingValue && Number(element.id) === Number(props.idToDelete) ? (<input type="text" />) : (<input disabled type="text" value={element.value} />)}
							{props.changingValue && Number(element.id) === Number(props.idToDelete) ? (<MdGppGood css={'color: green'} onClick={validateRow}/>) : (<BsPen onClick={changeRow}/>)}
							
							<RiDeleteBinLine onClick={deleteRow}/>
					
						</td>
				  	</tr>
				  })}
				</tbody>
			</Table>
		</div>
	)
}

export default Activities
