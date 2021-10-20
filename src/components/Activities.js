import React from 'react'
import Table from 'react-bootstrap/Table'
import {BsPen} from 'react-icons/bs'
import {RiDeleteBinLine} from 'react-icons/ri'
import {MdGppGood} from 'react-icons/md'
import Button from 'react-bootstrap/Button'


const Activities = (props) => {

	const deleteRow = (event) => {
		props.setIdToDelete(event.target?.parentNode?.parentNode?.id)
		props.activitiesList.splice(props.idToDelete, 1)
		if (props.activitiesList[0]) {
			props.setActivitiesList([...props.activitiesList])
		}
		if (!props.activitiesList[0]){
			props.setActivitiesList([])
			localStorage.clear();
		}
		
		props.setIdToDelete('')
	}

	const deleteAll = () => {
		props.setActivitiesList([])
		localStorage.clear();
	}

	const changeRow = (event) => {
		props.setChangingValue(true)
		props.setIdToDelete(event.target?.parentNode?.parentNode?.id)

	}

	const validateRow = (event) => {
		for (let i=0; i<props.activitiesList.length; i++) {
			if (props.activitiesList[i].id === Number(event.target?.parentNode?.parentNode?.id)){
				props.activitiesList[i].value = event.target?.parentNode?.children[0].value				
			}
		}
		props.setChangingValue(false)
	}

	const handleClick = (prev) => {
		props.setActive(false)
	}

	return (
		<div className="container mt-3 p-3 rounded activities" onClick={handleClick}>
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
			{props.activitiesList[1] ? <Button variant="danger" onClick={deleteAll}>Delete all list</Button> : null}
		</div>
	)
}

export default Activities
