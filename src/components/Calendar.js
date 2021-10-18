import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import useCalendar from '../Hooks/useCalendar'

const Calendar = (props) => {

	const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth} = useCalendar()

	const dateClickHandler = date => {
		props.setPickedDate(date)
		props.setActive(true) 
	}

	return (
		<div className="container">
			<p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
			
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						{daysShort.map(day => (
							<th key={day}>{day}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{
						Object.values(calendarRows).map(cols => {
							return <tr key={cols[0].date}>
								{cols.map(col => (
									
									col.date === todayFormatted 
									? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
										{col.value}
									</td>
									: <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>
										{col.value}
									</td>
								))}
								</tr>
						})
					}
				</tbody>
			</Table>

			<Button onClick={getPrevMonth}>Prev</Button>
			<Button variant="secondary" onClick={getNextMonth}>Next</Button>
		</div>
	)
}

export default Calendar
